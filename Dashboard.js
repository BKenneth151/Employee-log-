import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Building, 
  Settings, 
  Calendar,
  UserPlus,
  FileText,
  Search,
  Grid3x3
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const employees = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Product Designer', department: 'Design', status: 'Present' },
    { id: 2, name: 'Michael Chen', email: 'm.chen@company.com', role: 'Senior Developer', department: 'Engineering', status: 'Present' },
    { id: 3, name: 'Emily Davis', email: 'emily.d@company.com', role: 'Marketing Lead', department: 'Marketing', status: 'On Leave' },
    { id: 4, name: 'James Wilson', email: 'j.wilson@company.com', role: 'DevOps Engineer', department: 'Engineering', status: 'Present' }
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <Grid3x3 size={16} />
          </div>
          <span className="logo-text">AdminPortal</span>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <Home size={16} className="nav-icon" />
            <span className="nav-text">Dashboard</span>
          </div>
          <div className="nav-item" onClick={() => navigate('/employees')}>
            <Users size={16} className="nav-icon" />
            <span className="nav-text">Employees</span>
          </div>
          <div className="nav-item">
            <Building size={16} className="nav-icon" />
            <span className="nav-text">Departments</span>
          </div>
          <div className="nav-item">
            <Settings size={16} className="nav-icon" />
            <span className="nav-text">Settings</span>
          </div>
        </nav>
        
        <div className="profile-section">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex" alt="Alex" />
          <div>
            <div className="profile-name">Alex Morgan</div>
            <div className="profile-role">Admin</div>
          </div>
        </div>
      </div>

      {/* Main Content - Starts after sidebar */}
      <div className="main-content">
        <div className="content-header">
          <h1>Dashboard</h1>
          <p className="subtitle">Overview of your organization</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-container">
              <Users size={16} className="stat-icon" />
            </div>
            <div className="stat-content">
              <div className="stat-label">Total Employees</div>
              <div className="stat-number">142</div>
              <div className="stat-trend">↑ 5% vs last month</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon-container">
              <Calendar size={16} className="stat-icon" />
            </div>
            <div className="stat-content">
              <div className="stat-label">Present Today</div>
              <div className="stat-number">128</div>
              <div className="stat-trend">↑ 12% vs yesterday</div>
            </div>
          </div>
          
          <div className="stat-card action" onClick={() => navigate('/employees')}>
            <div className="stat-icon-container">
              <UserPlus size={16} className="stat-icon" />
            </div>
            <div className="stat-content">
              <div className="stat-label">Add Employee</div>
              <div className="stat-number">Quick Add</div>
            </div>
          </div>
          
          <div className="stat-card action">
            <div className="stat-icon-container">
              <FileText size={16} className="stat-icon" />
            </div>
            <div className="stat-content">
              <div className="stat-label">Generate Report</div>
              <div className="stat-number">Export Data</div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-section">
          <div className="table-header">
            <h2>All Employees</h2>
            <div className="search-box">
              <Search size={14} className="search-icon" />
              <input type="text" placeholder="Search employees by name, role..." />
            </div>
          </div>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>EMPLOYEE</th>
                  <th>ROLE</th>
                  <th>DEPARTMENT</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <div className="employee-cell">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${emp.name}`} alt={emp.name} />
                        <div>
                          <div className="emp-name">{emp.name}</div>
                          <div className="emp-email">{emp.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{emp.role}</td>
                    <td><span className="dept">{emp.department}</span></td>
                    <td><span className={`status ${emp.status.toLowerCase().replace(' ', '-')}`}>{emp.status}</span></td>
                    <td><button className="action-btn">⋯</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="table-footer">
              <div className="results">Showing 1-4 of 142 employees</div>
              <div className="pagination">
                <button className="page-btn">Previous</button>
                <button className="page-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;