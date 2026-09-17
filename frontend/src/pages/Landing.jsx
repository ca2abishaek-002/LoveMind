import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="page">
      <main className="hero">
        <h1 className="gradient-text">Meet Their Mind Before You Meet Them</h1>
        <p>
          Skip the small talk and connect on a deeper level. LoveMind creates a personalized AI proxy 
          based on your personality. Chat with the minds of your matches to find true compatibility.
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Get Started
          </Link>
          <Link to="/login" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Sign In
          </Link>
        </div>
      </main>

      <div className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-card text-center">
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🧠</div>
            <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>Personality-First</h3>
            <p className="text-muted">
              Answer thought-provoking questions to build an AI that thinks, reacts, and chats just like you do.
            </p>
          </div>
          <div className="glass-card text-center">
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💬</div>
            <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>AI Conversations</h3>
            <p className="text-muted">
              Chat with your potential match's AI proxy anytime. Find out if you vibe before making a move.
            </p>
          </div>
          <div className="glass-card text-center">
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✨</div>
            <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>Authentic Connections</h3>
            <p className="text-muted">
              Focus on chemistry and intellect rather than just swiping on photos. True connections await.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
