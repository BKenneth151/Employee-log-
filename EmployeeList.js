import React from 'react';
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = [
    {id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Senior Product Designer', dept: 'Design', status: 'Active'},
    {id: 2, name: 'Michael Chen', email: 'm.chen@company.com', role: 'Engineering Manager', dept: 'Engineering', status: 'On Leave'},
    {id: 3, name: 'Emma Wilson', email: 'emma.w@company.com', role: 'Marketing Specialist', dept: 'Marketing', status: 'Active'},
    {id: 4, name: 'James Rodriguez', email: 'james.r@company.com', role: 'Frontend Developer', dept: 'Engineering', status: 'Inactive'},
    {id: 5, name: 'Alexa Smith', email: 'alexa.s@company.com', role: 'HR Coordinator', dept: 'Human Resources', status: 'Active'}
  ];

  const deptColors = {
    'Design': '#3b82f6',
    'Engineering': '#8b5cf6', 
    'Marketing': '#ec4899',
    'Human Resources': '#ef4444'
  };

  const statusColors = {
    'Active': '#10b981',
    'On Leave': '#f59e0b',
    'Inactive': '#6b7280'
  };

  const getAvatar = (id) => 'https://api.dicebear.com/7.x/avataaars/svg?seed=employee' + id;

  return (
    <div className="employee-list">
      <div className="header">
        <div>
          <h1>Employee Directory</h1>
          <p>Manage your team members, roles, and permissions.</p>
        </div>
        <button className="add-btn">+ Add Employee</button>
      </div>

      <div className="filters">
        <div className="search">
          <span>🔍</span>
          <input placeholder="Search by name, role, or email..." />
        </div>
        <div className="filter-group">
          <div className="filter">Department: All ▼</div>
          <div className="filter">Status: Active ▼</div>
          <button className="export">Export CSV</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>EMPLOYEE</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="employee-info">
                  <img src={getAvatar(emp.id)} alt={emp.name} />
                  <div>
                    <div className="name">{emp.name}</div>
                    <div className="email">{emp.email}</div>
                  </div>
                </div>
              </td>
              <td>{emp.role}</td>
              <td>
                <span className="dept-tag" style={{background: deptColors[emp.dept]}}>
                  {emp.dept}
                </span>
              </td>
              <td>
                <div className="status">
                  <span className="dot" style={{background: statusColors[emp.status]}} />
                  {emp.status}
                </div>
              </td>
              <td><button className="actions">⋮</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div>Showing 1 to 5 of 48 results</div>
        <div>
          <button>Previous</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;