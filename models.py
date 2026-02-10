from sqlalchemy import Column, Integer, String, ForeignKey, Date, DateTime, Float, Boolean
from sqlalchemy.orm import relationship
from app.database import Base

class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    users = relationship("User", back_populates="role")

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(100), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    role_id = Column(Integer, ForeignKey("roles.id"))
    is_active = Column(Boolean, default=True)
    role = relationship("Role", back_populates="users")
    employee = relationship("Employee", back_populates="user", uselist=False)

class Employee(Base):
    __tablename__ = "employees"
    id = Column(Integer, primary_key=True, index=True)
    staff_id = Column(String(50), unique=True, nullable=False)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    department = Column(String(100))
    phone = Column(String(20))
    email = Column(String(100))
    user_id = Column(Integer, ForeignKey("users.id"))
    is_active = Column(Boolean, default=True)
    user = relationship("User", back_populates="employee")
    attendance = relationship("Attendance", back_populates="employee")
    activities = relationship("Activity", back_populates="employee")

class Attendance(Base):
    __tablename__ = "attendance"
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"), nullable=False)
    date = Column(Date, nullable=False)
    checkin_time = Column(DateTime)
    checkout_time = Column(DateTime)
    status = Column(String(20), default="present")
    employee = relationship("Employee", back_populates="attendance")

class Activity(Base):
    __tablename__ = "activities"
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"), nullable=False)
    date = Column(Date, nullable=False)
    tasks = Column(String(500))
    hours_worked = Column(Float, default=0.0)
    issues = Column(String(500))
    notes = Column(String(500))
    employee = relationship("Employee", back_populates="activities")