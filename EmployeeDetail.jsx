import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  FaSearch, 
  FaBell, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaUserTie,
  FaCalendarAlt,
  FaEdit,
  FaComment,
  FaCheckCircle,
  FaClock,
  FaTicketAlt,
  FaUserCheck,
  FaSignInAlt,
  FaChevronRight,
  FaMapMarkerAlt,
  FaChartLine
} from 'react-icons/fa';
import './EmployeeDetail.css';

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock employee data
  const employee = {
    id: 'EMP-492',
    name: 'Alex Sterling',
    role: 'Senior UX Designer',
    department: 'Product Design',
    status: 'ACTIVE',
    employmentType: 'FULL-TIME',
    location: 'SAN FRANCISCO',
    email: 'alex.s@company.com',
    phone: '+1 (555) 012-3456',
    manager: 'Sarah Connor',
    hireDate: 'Jan 15, 2021',
    avatarInitials: 'AS',
    skills: ['Figma', 'Prototyping', 'User Research', 'HTML/CSS', 'Design Systems'],
    attendanceScore: 98,
    totalHours: 42.5,
    targetHours: 40,
    checkIn: '08:58 AM',
    checkOut: '05:00 PM',
    weeklyAttendance: [
      { day: 'Mon', present: true },
      { day: 'Tue', present: true },
      { day: 'Wed', present: true },
      { day: 'Thu', present: true },
      { day: 'Fri', present: true }
    ]
  };

  const activities = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: 'Completed "Q3 Review"',
      description: 'Uploaded final presentation deck to the shared drive.',
      time: 'Just now',
      color: 'green'
    },
    {
      id: 2,
      icon: <FaClock />,
      title: 'Clocked In',
      description: '',
      time: 'Today, 08:58 AM',
      color: 'blue'
    },
    {
      id: 3,
      icon: <FaTicketAlt />,
      title: 'Updated Ticket #442',
      description: 'Changed status to In Progress',
      time: 'Yesterday, 4:30 PM',
      color: 'orange'
    },
    {
      id: 4,
      icon: <FaUserCheck />,
      title: 'Leave Request Approved',
      description: '',
      time: 'Oct 24, 2023',
      color: 'purple'
    },
    {
      id: 5,
      icon: <FaSignInAlt />,
      title: 'System Login',
      description: '',
      time: 'Oct 24, 08:58 AM',
      color: 'gray'
    }
  ];

  return (
    <div className="employee-detail-container">
      {/* Top Navigation Bar */}
      <nav className="top-navbar">
        <div className="nav-left">
          <div className="logo-container">
            <div className="grid-logo">
              <div className="grid-dot"></div>
              <div className="grid-dot"></div>
              <div className="grid-dot"></div>
              <div className="grid-dot"></div>
            </div>
            <h1 className="nav-logo">Employee Manager</h1>
          </div>
          
          <div className="nav-menu">
            <button className="nav-item" onClick={() => navigate('/dashboard')}>Dashboard</button>
            <button className="nav-item active">Employees</button>
            <button className="nav-item">Reports</button>
            <button className="nav-item">Settings</button>
          </div>
        </div>

        <div className="nav-right">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search employees..."
              className="search-input"
            />
          </div>
          <button className="notification-btn">
            <FaBell />
          </button>
          <div className="user-avatar">
            <div className="avatar-initial">AM</div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumb-item" onClick={() => navigate('/dashboard')}>Home</span>
        <FaChevronRight className="breadcrumb-arrow" />
        <span className="breadcrumb-item" onClick={() => navigate('/employees')}>Employees</span>
        <FaChevronRight className="breadcrumb-arrow" />
        <span className="breadcrumb-item active">{employee.name}</span>
      </div>

      <main className="employee-content">
        {/* Left Column - Personal Info */}
        <div className="left-column">
          {/* Profile Header Card */}
          <div className="profile-header-card">
            <div className="profile-avatar-large">
              <div className="avatar-circle-large">
                <div className="avatar-initial-large">{employee.avatarInitials}</div>
              </div>
            </div>
            
            <div className="profile-info">
              <h1 className="employee-name">{employee.name}</h1>
              <p className="employee-role">{employee.role} · {employee.department}</p>
              
              <div className="status-badges">
                <span className="badge badge-green">{employee.status}</span>
                <span className="badge badge-dark">{employee.employmentType}</span>
                <span className="badge badge-dark">
                  <FaMapMarkerAlt className="location-icon" />
                  {employee.location}
                </span>
              </div>
            </div>

            <div className="profile-actions">
              <button className="btn-edit">
                <FaEdit />
                Edit Profile
              </button>
              <button className="btn-message">
                <FaComment />
                Message
              </button>
            </div>
          </div>

          {/* Personal Information Card */}
          <div className="info-card">
            <div className="card-header">
              <h3 className="card-title">Personal Information</h3>
              <button className="card-menu">···</button>
            </div>
            
            <div className="contact-section">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">{employee.email}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">{employee.phone}</p>
                </div>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <FaBuilding className="info-icon" />
                <div>
                  <p className="info-label">Department</p>
                  <p className="info-value">{employee.department}</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaUserTie className="info-icon" />
                <div>
                  <p className="info-label">Manager</p>
                  <p className="info-value">{employee.manager}</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">#</div>
                <div>
                  <p className="info-label">Employee ID</p>
                  <p className="info-value">{employee.id}</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <div>
                  <p className="info-label">Hire Date</p>
                  <p className="info-value">{employee.hireDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="skills-card">
            <h3 className="card-title">Skills</h3>
            <div className="skills-list">
              {employee.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column - Attendance */}
        <div className="center-column">
          {/* Attendance Metrics */}
          <div className="metrics-row">
            <div className="metric-card circular">
              <div className="metric-content">
                <h3 className="metric-value">{employee.attendanceScore}%</h3>
                <p className="metric-label">Attendance Score</p>
                <div className="metric-trend">
                  <FaChartLine className="trend-icon" />
                  <span className="trend-text">+2%</span>
                </div>
              </div>
            </div>
            
            <div className="metric-card circular">
              <div className="metric-content">
                <h3 className="metric-value">{employee.totalHours}h</h3>
                <p className="metric-label">Total hours (Week)</p>
                <p className="metric-subtext">out of {employee.targetHours}h</p>
              </div>
            </div>
          </div>

          {/* Weekly Attendance */}
          <div className="attendance-card">
            <div className="card-header">
              <h3 className="card-title">Weekly Attendance</h3>
              <button className="view-report-btn">View Report →</button>
            </div>
            
            <div className="week-days">
              {employee.weeklyAttendance.map((day, index) => (
                <div key={index} className={`day-box ${day.present ? 'present' : ''}`}>
                  <p className="day-name">{day.day}</p>
                  <div className="day-indicator"></div>
                </div>
              ))}
            </div>
            
            <div className="check-times">
              <div className="check-in">
                <p className="time-label">Today's Check in</p>
                <p className="time-value">{employee.checkIn}</p>
              </div>
              <div className="check-out">
                <p className="time-label">Est. Check Out</p>
                <p className="time-value">{employee.checkOut}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Activity Log */}
        <div className="right-column">
          <div className="activity-card">
            <h3 className="card-title">Activity Log</h3>
            
            <div className="activity-timeline">
              {activities.map((activity, index) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon" style={{ color: `var(--${activity.color})` }}>
                    {activity.icon}
                  </div>
                  
                  <div className="activity-content">
                    <div className="activity-header">
                      <h4 className="activity-title">{activity.title}</h4>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                    
                    {activity.description && (
                      <p className="activity-desc">{activity.description}</p>
                    )}
                    
                    {index < activities.length - 1 && (
                      <div className="timeline-connector"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="view-history-btn">
              VIEW FULL HISTORY
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetail;
