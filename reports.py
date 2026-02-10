from fastapi import APIRouter

router = APIRouter(prefix="/reports", tags=["reports"])

@router.get("/")
def get_reports():
    return {"message": "Report endpoints", "available": ["attendance", "activities", "employees"]}

@router.get("/attendance-summary")
def attendance_summary():
    return {"message": "Attendance summary report"}