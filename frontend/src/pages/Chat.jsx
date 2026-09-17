import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import ChatBubble from '../components/ChatBubble';

const Chat = () => {
  const { proxyUserId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const [proxyUser, setProxyUser] = useState(null);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get(`/chat/history/${proxyUserId}`);
        setMessages(response.data.messages || []);
        
        // Also fetch user details for header
        const userRes = await api.get('/users/matches');
        const match = userRes.data.find(m => m.id.toString() === proxyUserId.toString());
        if (match) {
          setProxyUser(match);
        }
        
      } catch (err) {
        setError('Failed to load chat history');
      }
    };
    
    fetchHistory();
  }, [proxyUserId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;
    
    const userMsg = inputMessage;
    setInputMessage('');
    
    const newMessage = {
      role: 'user',
      content: userMsg,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    
    try {
      const response = await api.post('/chat/send', {
        proxyUserId,
        message: userMsg
      });
      
      const assistantMsg = {
        role: 'assistant',
        content: response.data.reply,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      setError('Failed to send message');
      // Remove the optimistic message if it failed
      setMessages(prev => prev.filter(m => m !== newMessage));
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="page chat-page">
      <div className="chat-container">
        
        <div className="chat-header">
          <button 
            onClick={() => navigate('/dashboard')} 
            className="btn" 
            style={{ padding: '8px', background: 'rgba(255,255,255,0.1)' }}
          >
            ←
          </button>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>
              {proxyUser ? (proxyUser.displayName || proxyUser.username) : 'Proxy User'}
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#a78bfa' }}>AI Proxy Active</span>
          </div>
        </div>

        {error && <div className="alert-error" style={{ margin: '16px' }}>{error}</div>}

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="text-center text-muted" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <p>Say hello! This AI is modeled after their personality.</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <ChatBubble 
                key={index}
                message={msg.content}
                role={msg.role}
                timestamp={msg.timestamp}
              />
            ))
          )}
          
          {isTyping && (
            <div className="message-wrapper assistant">
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={!inputMessage.trim() || isTyping}
            style={{ borderRadius: '50%', padding: '12px 16px' }}
          >
            ➤
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Chat;
