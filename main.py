from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.auth import router as auth_router
from app.employees import router as emp_router
from app.attendance import router as att_router
from app.activity import router as act_router
from app.reports import router as rep_router

app = FastAPI(
    title="Employee Log API",
    version="1.0.0"
)

# Add CORS middleware - REQUIRED for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Employee Log API - Go to /docs"}

app.include_router(auth_router)
app.include_router(emp_router)
app.include_router(att_router)
app.include_router(act_router)
app.include_router(rep_router)