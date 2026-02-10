import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaCalendarCheck, 
  FaListAlt, 
  FaProjectDiagram,
  FaCalendarAlt,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaSave,
  FaCalendarDay
} from 'react-icons/fa';
import './ActivityLogForm.css';

const ActivityLogForm = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('activity-log');
  const [hoursLogged, setHoursLogged] = useState('');
  const [blockers, setBlockers] = useState('');
  const [tasks, setTasks] = useState('');
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [lastSaved, setLastSaved] = useState('Just now');
  const [taskList, setTaskList] = useState([
    'Implemented new login flow',
    'Fixed bug in payment gateway',
    'Team meeting about Q4 strategy'
  ]);

  const recentActivities = [
    { hours: 8.5, description: 'Frontend development on dashboard' },
    { hours: 8.0, description: 'Payment system integration' },
    { hours: 7.0, description: 'Bug fixes and testing' },
    { hours: 6.5, description: 'Planning phase 2 features' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLastSaved('Just now');
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!hoursLogged || !tasks) {
      alert('Please fill in required fields');
      return;
    }
    
    // Simulate submission
    const logData = {
      date: new Date().toLocaleDateString(),
      hours: hoursLogged,
      tasks: tasks,
      blockers: blockers,
      taskList: taskList
    };
    
    console.log('Activity Log Submitted:', logData);
    alert('Daily activity log submitted successfully!');
    
    // Reset form
    setHoursLogged('');
    setTasks('');
    setBlockers('');
    setLastSaved('Just now');
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = e.target.elements.newTask?.value;
    if (newTask && newTask.trim()) {
      setTaskList([...taskList, newTask.trim()]);
      e.target.reset();
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = taskList.filter((_, i) => i !== index);
    setTaskList(newTasks);
  };

  const weeklyProgress = 32;
  const progressPercentage = (weeklyProgress / 40) * 100;

  return (
    <div className="activity-log-form-container">
      {/* LEFT SIDEBAR NAVIGATION */}
      <div className="sidebar-al">
        {/* Sidebar Header */}
        <div className="sidebar-header-al">
          <div className="user-avatar-al">
            <div className="avatar-circle-al">JD</div>
          </div>
          <div className="user-info-al">
            <h3 className="user-name-al">Jane Doe</h3>
            <p className="user-role-al">Product Designer</p>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="nav-section-al">
          <div className="section-title-al">Attendance</div>
          <button 
            className="nav-item-al" 
            onClick={() => navigate('/dashboard')}
          >
            <FaHome className="nav-icon-al" />
            <span>Dashboard</span>
          </button>
          <button className="nav-item-al">
            <FaCalendarCheck className="nav-icon-al" />
            <span>Attended</span>
          </button>
          <div className="dropdown-header-al" onClick={() => setProjectsExpanded(!projectsExpanded)}>
            <FaProjectDiagram className="nav-icon-al" />
            <span>Projects</span>
            {projectsExpanded ? <FaChevronUp className="dropdown-arrow" /> : <FaChevronDown className="dropdown-arrow" />}
          </div>
          {projectsExpanded && (
            <div className="dropdown-items-al">
              <button className="dropdown-item-al">Project Alpha</button>
              <button className="dropdown-item-al">Project Beta</button>
              <button className="dropdown-item-al">Project Gamma</button>
            </div>
          )}
          <button 
            className={`nav-item-al ${activeMenu === 'activity-log' ? 'active-al' : ''}`}
            onClick={() => setActiveMenu('activity-log')}
          >
            <FaListAlt className="nav-icon-al" />
            <span>Activity Log</span>
          </button>
        </div>

        {/* Main Section */}
        <div className="nav-section-al">
          <div className="section-title-al">Main</div>
          <button className="nav-item-al">
            <FaProjectDiagram className="nav-icon-al" />
            <span>Projects</span>
          </button>
          <button className="nav-item-al">
            <FaCalendarAlt className="nav-icon-al" />
            <span>Schedule</span>
          </button>
          <button className="nav-item-al">
            <FaChartBar className="nav-icon-al" />
            <span>Reports</span>
          </button>
          <button className="nav-item-al">
            <FaUsers className="nav-icon-al" />
            <span>Team</span>
          </button>
        </div>

        {/* Footer Section */}
        <div className="nav-section-al footer-section-al">
          <button className="nav-item-al">
            <FaSignOutAlt className="nav-icon-al" />
            <span>Sign Out</span>
          </button>
          <button className="nav-item-al settings-item">
            <FaCog className="nav-icon-al" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="main-content-al">
        {/* MAIN HEADER AREA */}
        <header className="main-header-al">
          <div className="date-display-al">
            {new Date().toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            }).toUpperCase()}
          </div>
          <h1 className="page-title-al">Daily Activity Log</h1>
          <p className="page-subtitle-al">
            Record your hours, and add any blockers for accurate tracking. Accurate logs help us track project velocity.
          </p>
        </header>

        {/* CENTRAL CONTENT COLUMN - Three Cards */}
        <form onSubmit={handleSubmit} className="content-column-al">
          {/* Card 1 - HOURS LOGGED */}
          <div className="card-al">
            <div className="card-header-al">
              <h3 className="card-title-al">HOURS LOGGED</h3>
            </div>
            <div className="card-body-al">
              <div className="hours-input-container">
                <input
                  type="number"
                  className="hours-input-al"
                  placeholder="0.0 Hours"
                  value={hoursLogged}
                  onChange={(e) => setHoursLogged(e.target.value)}
                  step="0.5"
                  min="0"
                  max="24"
                  required
                />
                <div className="input-underline-al"></div>
              </div>
              <p className="hours-note-al">
                Standard working day is 8 hours. Overtime requires approval.
              </p>
            </div>
          </div>

          {/* Card 2 - TASKS COMPLETED */}
          <div className="card-al">
            <div className="card-header-al">
              <h3 className="card-title-al">TASKS COMPLETED</h3>
            </div>
            <div className="card-body-al">
              <div className="tasks-list-al">
                {taskList.map((task, index) => (
                  <div key={index} className="task-item-al">
                    <div className="task-bullet-al"></div>
                    <span className="task-text-al">{task}</span>
                    <button 
                      type="button"
                      className="task-remove-al"
                      onClick={() => handleRemoveTask(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <form onSubmit={handleAddTask} className="add-task-container">
                <input
                  type="text"
                  name="newTask"
                  className="new-task-input"
                  placeholder="Add a new task..."
                />
                <button type="submit" className="add-task-btn">
                  Add
                </button>
              </form>
              <textarea
                className="tasks-textarea-al"
                placeholder="Describe tasks in detail..."
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                rows="3"
                required
              />
            </div>
          </div>

          {/* Card 3 - BLOCKERS OR ISSUES */}
          <div className="card-al">
            <div className="card-header-al">
              <h3 className="card-title-al">BLOCKERS OR ISSUES</h3>
              <span className="optional-label">Optional</span>
            </div>
            <div className="card-body-al">
              <textarea
                className="blockers-textarea-al"
                placeholder="Were there any obstacles preventing progress today?"
                value={blockers}
                onChange={(e) => setBlockers(e.target.value)}
                rows="4"
              />
              <div className="card-footer-al">
                <div className="timestamp-al">
                  <FaSave className="save-icon" />
                  Last saved: {lastSaved}
                </div>
                <button type="submit" className="submit-btn-al">
                  <span>Submit Log</span>
                  <FaArrowRight className="submit-icon" />
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* RIGHT COLUMN - SUMMARY PANEL */}
        <div className="right-panel-al">
          {/* Section A - RECENT ACTIVITY */}
          <div className="summary-card-al">
            <div className="summary-header-al">
              <h3 className="summary-title-al">Recent Activity</h3>
              <div className="header-actions-al">
                <FaBell className="bell-icon" />
                <button type="button" className="schedule-btn-al">
                  <FaCalendarDay className="calendar-icon" />
                  My Schedule
                </button>
              </div>
            </div>
            <div className="recent-activities-al">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item-al">
                  <FaCheckCircle className="activity-icon-al" />
                  <div className="activity-content-al">
                    <div className="activity-hours">{activity.hours} Hours</div>
                    <div className="activity-desc">{activity.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="view-history-link-al">View Full History</button>
          </div>

          {/* Section B - WEEKLY GOAL */}
          <div className="summary-card-al">
            <div className="summary-header-al">
              <h3 className="summary-title-al">Weekly Goal</h3>
            </div>
            <div className="weekly-goal-al">
              <div className="goal-metric-al">
                <span className="goal-current">{weeklyProgress}</span>
                <span className="goal-separator">/</span>
                <span className="goal-total">40 hrs</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-al" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="goal-footer-al">
                <button type="button" className="view-history-link-al">View Full History</button>
                <div className="encouragement-al">
                  You're on track! Keep it up.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogForm;
