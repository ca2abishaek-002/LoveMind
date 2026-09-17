import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    const { confirmPassword, ...registerData } = formData;
    const result = await register(registerData);
    
    setIsLoading(false);
    
    if (result.success) {
      navigate('/onboarding');
    } else {
      setError(result.error || 'Failed to register');
    }
  };

  return (
    <div className="page auth-page">
      <div className="auth-card glass-card">
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h2 className="gradient-text">Create Account</h2>
          <p className="text-muted" style={{ marginTop: '8px' }}>Join LoveMind and find your true match</p>
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
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Display Name</label>
            <input 
              type="text" 
              name="displayName" 
              className="form-input" 
              placeholder="John Doe"
              value={formData.displayName}
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
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              className="form-input" 
              placeholder="••••••••"
              value={formData.confirmPassword}
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
            {isLoading ? 'Creating...' : 'Register'}
          </button>
        </form>

        <p className="text-center text-muted" style={{ marginTop: '24px' }}>
          Already have an account? <Link to="/login" style={{ color: '#a78bfa' }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
