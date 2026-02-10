from pydantic import BaseModel, EmailStr
from datetime import date, datetime
from typing import Optional

class RoleSchema(BaseModel):
    id: Optional[int]
    name: str
    class Config:
        from_attributes = True

class UserSchema(BaseModel):
    id: Optional[int]
    email: EmailStr
    role_id: int
    is_active: Optional[bool] = True
    class Config:
        from_attributes = True

class UserCreateSchema(BaseModel):
    email: EmailStr
    password: str
    role_id: int

class EmployeeSchema(BaseModel):
    id: Optional[int]
    staff_id: str
    first_name: str
    last_name: str
    department: Optional[str]
    phone: Optional[str]
    email: Optional[EmailStr]
    user_id: Optional[int]
    is_active: Optional[bool] = True
    class Config:
        from_attributes = True


class EmployeeCreateSchema(BaseModel):
    staff_id: str
    first_name: str
    last_name: str
    department: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    user_id: Optional[int] = None  # THIS LINE MUST HAVE "= None"

    class Config:
        from_attributes = True

class EmployeeUpdateSchema(BaseModel):
    staff_id: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    department: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    user_id: Optional[int] = None
    is_active: Optional[bool] = None
    class Config:
        from_attributes = True

class AttendanceSchema(BaseModel):
    id: Optional[int]
    employee_id: int
    date: date
    checkin_time: Optional[datetime]
    checkout_time: Optional[datetime]
    status: Optional[str]
    class Config:
        from_attributes = True

class AttendanceCreateSchema(BaseModel):
    employee_id: int
    date: date
    status: Optional[str] = "present"

class ActivitySchema(BaseModel):
    id: Optional[int]
    employee_id: int
    date: date
    tasks: Optional[str]
    hours_worked: Optional[float]
    issues: Optional[str]
    notes: Optional[str]
    class Config:
        from_attributes = True

class ActivityCreateSchema(BaseModel):
    employee_id: int
    date: date
    tasks: Optional[str]
    hours_worked: Optional[float]
    issues: Optional[str]
    notes: Optional[str]