from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas

router = APIRouter(prefix="/activity", tags=["activity"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=schemas.ActivitySchema)
def create_activity(activity: schemas.ActivityCreateSchema, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == activity.employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    db_activity = models.Activity(**activity.dict())
    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity


@router.get("/employee/{employee_id}", response_model=list[schemas.ActivitySchema])
def get_employee_activities(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    activities = db.query(models.Activity).filter(
        models.Activity.employee_id == employee_id
    ).all()
    return activities