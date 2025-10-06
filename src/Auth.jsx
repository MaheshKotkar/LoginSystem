import { useState } from 'react';
import './Auth.css';

function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!loginData.email || !loginData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(loginData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://loginsystembackend-eeqx.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1500);
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Unable to connect to server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!signupData.name || !signupData.email || !signupData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(signupData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (signupData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          password: signupData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setSuccess('Account created successfully!');
        setSignupData({ name: '', email: '', password: '' });
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Unable to connect to server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="tab-header">
          <button
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => switchTab('login')}
          >
            Login
          </button>
          <button
            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => switchTab('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="form-container">
          {error && <div className="message error-message">{error}</div>}
          {success && <div className="message success-message">{success}</div>}

          {activeTab === 'login' ? (
            <form className="auth-form" onSubmit={handleLoginSubmit} key="login">
              <h2>Welcome Back</h2>
              <p className="subtitle">Login to your account</p>

              <div className="input-group">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>

              <div className="input-group">
                <label htmlFor="login-password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSignupSubmit} key="signup">
              <h2>Create Account</h2>
              <p className="subtitle">Sign up to get started</p>

              <div className="input-group">
                <label htmlFor="signup-name">Name</label>
                <input
                  type="text"
                  id="signup-name"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  placeholder="Enter your name"
                  disabled={isLoading}
                />
              </div>

              <div className="input-group">
                <label htmlFor="signup-email">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>

              <div className="input-group">
                <label htmlFor="signup-password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signup-password"
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    placeholder="Min 8 characters"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  'Sign Up'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
