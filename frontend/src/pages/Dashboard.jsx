import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await api.get('/users/matches');
        setMatches(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load matches');
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const getInitials = (name) => {
    if (!name) return '?';
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="page dashboard-page container">
      <div className="dashboard-header">
        <h2 className="gradient-text">Your Matches</h2>
        <p className="text-muted">Chat with their AI proxies to see if you connect.</p>
      </div>

      {error && <div className="alert-error">{error}</div>}

      {loading ? (
        <div className="match-grid">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className="glass-card match-card" style={{ opacity: 0.5 }}>
              <div className="avatar-placeholder" style={{ background: '#2a2a35' }}></div>
              <div style={{ height: '24px', width: '60%', background: '#2a2a35', borderRadius: '4px', marginBottom: '8px' }}></div>
              <div style={{ height: '16px', width: '90%', background: '#2a2a35', borderRadius: '4px', marginBottom: '4px' }}></div>
              <div style={{ height: '16px', width: '70%', background: '#2a2a35', borderRadius: '4px', marginBottom: '24px' }}></div>
              <div style={{ height: '40px', width: '80%', background: '#2a2a35', borderRadius: '8px' }}></div>
            </div>
          ))}
        </div>
      ) : matches.length === 0 ? (
        <div className="glass-card text-center" style={{ padding: '64px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🔍</div>
          <h3>No matches yet</h3>
          <p className="text-muted" style={{ marginTop: '16px' }}>
            We're looking for compatible minds for you. Check back later!
          </p>
        </div>
      ) : (
        <div className="match-grid">
          {matches.map(match => (
            <div key={match.id} className="glass-card match-card">
              <div className="avatar-placeholder">
                {getInitials(match.displayName || match.username)}
              </div>
              <h3 className="match-name">{match.displayName || match.username}</h3>
              <div className="match-bio">
                {match.bio || "This user prefers to let their proxy do the talking."}
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => navigate(`/chat/${match.id}`)}
                style={{ width: '100%' }}
              >
                Chat with AI
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
