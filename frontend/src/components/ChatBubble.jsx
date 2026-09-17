import React from 'react';

const ChatBubble = ({ message, role, timestamp }) => {
  const isUser = role === 'user';
  
  const formatTime = (timeString) => {
    if (!timeString) return '';
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`message-wrapper ${isUser ? 'user' : 'assistant'}`}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="message-bubble">
          {message}
        </div>
        <div className="message-time">
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
