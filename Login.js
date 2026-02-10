import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaArrowRight, FaEnvelope, FaLock } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    alert('Google OAuth integration would be implemented here');
  };

  localStorage.setItem('isAuthenticated', 'true');

  return (
    <div className="login-container">
      {/* Left Panel - Branding */}
      <div className="branding-panel">
        {/* Arch Shape */}
        <div className="arch-shape"></div>
        
        <div className="brand-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="grid-logo">
              <div className="grid-dot"></div>
              <div className="grid-dot"></div>
              <div className="grid-dot"></div>
              <div className="grid-dot"></div>
            </div>
            <h1 className="logo">EmployeeOS</h1>
          </div>

          {/* Tagline */}
          <div className="tagline-container">
            <p className="tagline">
              "The most efficient way to manage your workforce, all in one place."
            </p>
          </div>

          {/* Features */}
          <div className="features">
            <div className="feature">
              <FcCheckmark className="check-icon" />
              <span>Real-time attendance tracking</span>
            </div>
            <div className="feature">
              <FcCheckmark className="check-icon" />
              <span>Secure payroll integration</span>
            </div>
          </div>

          {/* Version */}
          <div className="version-tag">
            <span>ENTERPRISE EDITION 2.0</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="login-panel">
        <div className="login-form-container">
          {/* Welcome Section */}
          <div className="welcome-section">
            <h2>Welcome Back</h2>
            <p className="subtitle">Please enter your details to sign in to your dashboard.</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Field */}
            <div className="form-group">
              <label className="input-label">
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="form-input"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="input-label">
                <FaLock className="input-icon" />
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="form-input"
              />
              <a href="#" className="forgot-password" onClick={(e) => { e.preventDefault(); alert('Password reset flow'); }}>
                Forgot password?
              </a>
            </div>

            {/* Remember Me */}
            <div className="remember-me">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                  className="checkbox-input"
                />
                <span className="checkbox-custom"></span>
                <span>Remember me</span>
              </label>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="signin-btn" disabled={loading}>
              <span>Sign In</span>
              <FaArrowRight className="arrow-icon" />
            </button>

            {/* Divider */}
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            {/* Google Sign In */}
            <button 
              type="button" 
              className="google-btn"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <FaGoogle className="google-icon" />
              <span>Sign in with Google</span>
            </button>

            {/* HR Contact */}
            <div className="hr-contact">
              <span>Don't have an account? </span>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Contact HR department'); }}>
                Contact HR
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
