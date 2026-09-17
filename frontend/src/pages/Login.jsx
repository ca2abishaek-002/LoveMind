import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    const result = await login(formData);
    
    setIsLoading(false);
    
    if (result.success) {
      // Direct to dashboard (auth context user data should determine if onboarding is needed in a more complex setup, 
      // but for now we route to dashboard assuming registration flows to onboarding)
      if (result.user.onboardingComplete) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    } else {
      setError(result.error || 'Failed to login');
    }
  };

  return (
    <div className="page auth-page">
      <div className="auth-card glass-card">
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h2 className="gradient-text">Welcome Back</h2>
          <p className="text-muted" style={{ marginTop: '8px' }}>Sign in to continue to LoveMind</p>
        </div>

        {error && <div className="alert-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              name="username" 
              className="form-input" 
              placeholder="johndoe"
              value={formData.username}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-input" 
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '16px' }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-muted" style={{ marginTop: '24px' }}>
          Don't have an account? <Link to="/register" style={{ color: '#a78bfa' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
