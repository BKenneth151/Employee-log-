from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from app.database import SessionLocal
from app import models, schemas

router = APIRouter(prefix="/attendance", tags=["attendance"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/checkin")
def checkin(att: schemas.AttendanceCreateSchema, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == att.employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    today = att.date
    existing = db.query(models.Attendance).filter(
        models.Attendance.employee_id == att.employee_id,
        models.Attendance.date == today
    ).first()

    if existing:
        if existing.checkin_time:
            raise HTTPException(status_code=400, detail="Already checked in")
        existing.checkin_time = datetime.utcnow()
        existing.status = att.status
    else:
        record = models.Attendance(
            employee_id=att.employee_id,
            date=today,
            checkin_time=datetime.utcnow(),
            status=att.status
        )
        db.add(record)

    db.commit()
    return {"status": "checked in", "time": datetime.utcnow()}


@router.post("/checkout")
def checkout(att: schemas.AttendanceCreateSchema, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == att.employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    today = att.date
    record = db.query(models.Attendance).filter(
        models.Attendance.employee_id == att.employee_id,
        models.Attendance.date == today
    ).first()

    if not record:
        raise HTTPException(status_code=400, detail="No checkin record found")
    if record.checkout_time:
        raise HTTPException(status_code=400, detail="Already checked out")

    record.checkout_time = datetime.utcnow()
    db.commit()
    return {"status": "checked out", "time": datetime.utcnow()}


@router.get("/employee/{employee_id}", response_model=list[schemas.AttendanceSchema])
def get_employee_attendance(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    records = db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()
    return records