import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaCalendarCheck, 
  FaUser, 
  FaUsers, 
  FaCog,
  FaClock,
  FaCalendarAlt,
  FaBell,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaDotCircle,
  FaMountain,
  FaArrowRight,
  FaChartLine
} from 'react-icons/fa';
import './Attendance.css';

const Attendance = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('attendance');
  const [time, setTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(true);
  const [workDuration, setWorkDuration] = useState({ hours: 4, minutes: 12, seconds: 35 });
  const [elapsedSeconds, setElapsedSeconds] = useState(15155); // 4h 12m 35s in seconds

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      
      if (isClockedIn) {
        setElapsedSeconds(prev => prev + 1);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        setWorkDuration({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [elapsedSeconds, isClockedIn]);

  // Format date as "Tuesday, October 24, 2023"
  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return time.toLocaleDateString('en-US', options);
  };

  const activities = [
    { 
      id: 1, 
      action: 'Clock In', 
      detail: 'Back from Lunch', 
      time: '01:30 PM', 
      icon: <FaCheckCircle />, 
      status: 'today' 
    },
    { 
      id: 2, 
      action: 'Clock Out', 
      detail: 'Lunch Break', 
      time: '12:30 PM', 
      icon: <FaCheckCircle />, 
      status: 'today' 
    },
    { 
      id: 3, 
      action: 'Clock In', 
      detail: 'Shift Started', 
      time: '09:30 AM', 
      icon: <FaCheckCircle />, 
      status: 'today' 
    },
    { 
      id: 4, 
      action: 'Clock Out', 
      detail: 'Shift Ended (Yesterday)', 
      time: '06:00 PM', 
      icon: <FaDotCircle />, 
      status: 'yesterday' 
    },
  ];

  const handleClockAction = () => {
    if (isClockedIn) {
      setIsClockedIn(false);
      // In a real app, you would add this to activities array
    } else {
      setIsClockedIn(true);
      setElapsedSeconds(0);
      setWorkDuration({ hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="attendance-v2-container">
      {/* LEFT SIDEBAR - Deep Forest Green Background */}
      <div className="sidebar-v2">
        {/* Top Logo */}
        <div className="logo-section-v2">
          <div className="logo-icon-container">
            <FaMountain className="logo-icon" />
          </div>
          <h1 className="logo-text-v2">EmpowerHR</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav-v2">
          <button 
            className="nav-item-v2" 
            onClick={() => {
              setActiveMenu('dashboard');
              navigate('/dashboard');
            }}
          >
            <FaHome className="nav-icon-v2" />
            <span>Dashboard</span>
          </button>
          
          <button 
            className={`nav-item-v2 ${activeMenu === 'attendance' ? 'active-v2' : ''}`}
            onClick={() => setActiveMenu('attendance')}
          >
            <FaCalendarCheck className="nav-icon-v2" />
            <span>Attendance</span>
          </button>
          
          <button 
            className="nav-item-v2"
            onClick={() => {
              setActiveMenu('profile');
              navigate('/employee/EMP-492');
            }}
          >
            <FaUser className="nav-icon-v2" />
            <span>Profile</span>
          </button>
          
          <button className="nav-item-v2">
            <FaUsers className="nav-icon-v2" />
            <span>Team</span>
          </button>
          
          <button className="nav-item-v2">
            <FaCog className="nav-icon-v2" />
            <span>Settings</span>
          </button>
        </nav>

        {/* Bottom Profile */}
        <div className="profile-section-v2">
          <div className="profile-avatar-v2">
            <div className="avatar-initial-v2">AM</div>
          </div>
          <div className="profile-info-v2">
            <h3 className="profile-name-v2">Alex Morgan</h3>
            <p className="profile-role-v2">Product Designer</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="main-content-v2">
        {/* TOP HEADER BAR */}
        <header className="header-v2">
          <div className="header-left-v2">
            <h1 className="greeting-v2">Good Morning, Alex</h1>
            <p className="date-v2">{formatDate()}</p>
          </div>
          <button className="schedule-btn-v2">
            <FaBell className="schedule-icon" />
            My Schedule
          </button>
        </header>

        {/* CENTRAL PRIMARY CARD */}
        <div className="primary-card-v2">
          <div className="status-header-v2">
            <span className="status-text-v2">CURRENTLY WORKING</span>
          </div>
          
          <div className="timer-container-v2">
            <div className="digital-timer-v2">{formatTime(time)}</div>
            <div className="duration-subtitle-v2">Total duration: {workDuration.hours}h {workDuration.minutes}m</div>
          </div>
          
          <button 
            className={`clock-action-btn-v2 ${isClockedIn ? 'clock-out-v2' : 'clock-in-v2'}`}
            onClick={handleClockAction}
          >
            <FaClock className="clock-icon-v2" />
            {isClockedIn ? 'CLOCK OUT' : 'CLOCK IN'}
          </button>
          
          <p className="shift-start-v2">Started shift at: 09:30 AM</p>
        </div>

        {/* BOTTOM METRICS ROW - 3 Equal Cards */}
        <div className="metrics-row-v2">
          {/* Card 1 - Today's Hours */}
          <div className="metric-card-v2 card-blue">
            <div className="metric-icon-v2 blue-icon">
              <FaClock />
            </div>
            <div className="metric-content-v2">
              <p className="metric-label-v2">Today's Hours</p>
              <h3 className="metric-value-v2">{workDuration.hours}h {workDuration.minutes}m</h3>
            </div>
          </div>
          
          {/* Card 2 - Last Entry */}
          <div className="metric-card-v2 card-purple">
            <div className="metric-icon-v2 purple-icon">
              <FaArrowRight />
            </div>
            <div className="metric-content-v2">
              <p className="metric-label-v2">Last Entry</p>
              <h3 className="metric-value-v2">01:30 PM</h3>
            </div>
          </div>
          
          {/* Card 3 - Overtime */}
          <div className="metric-card-v2 card-orange">
            <div className="metric-icon-v2 orange-icon">
              <FaChartLine />
            </div>
            <div className="metric-content-v2">
              <p className="metric-label-v2">Overtime</p>
              <h3 className="metric-value-v2">0h 0m</h3>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN ACTIVITY & LOCATION */}
        <div className="right-column-v2">
          {/* Recent Activity Section */}
          <div className="activity-section-v2">
            <div className="activity-header-v2">
              <h3 className="activity-title-v2">Recent Activity</h3>
              <button className="view-all-btn-v2">View All</button>
            </div>
            
            <div className="timeline-list-v2">
              {activities.map((activity) => (
                <div key={activity.id} className="timeline-item-v2">
                  <div className={`timeline-icon-v2 ${activity.status}`}>
                    {activity.icon}
                  </div>
                  <div className="timeline-content-v2">
                    <div className="timeline-action-v2">
                      <span className="action-text">{activity.action}</span>
                      <span className="action-detail"> - {activity.detail}</span>
                    </div>
                    <div className="timeline-time-v2">
                      <span className={`time-badge ${activity.status}`}>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Location Section */}
          <div className="location-section-v2">
            <div className="map-placeholder-v2">
              <div className="map-grid-v2">
                <div className="grid-line-v2 horizontal"></div>
                <div className="grid-line-v2 vertical"></div>
                <div className="location-pin-v2">
                  <FaMapMarkerAlt />
                </div>
              </div>
            </div>
            <div className="location-info-v2">
              <FaMapMarkerAlt className="pin-icon-v2" />
              <span>New York, NY Office</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
