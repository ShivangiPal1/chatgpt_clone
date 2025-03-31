import React from 'react';
import './chatbot.css';

const JaxonAIChat = () => {
  return (
    <div className="chat-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            {/* Logo placeholder */}
            <div className="logo-placeholder">#</div>
          </div>
          <h1 className="app-title">JAXON.AI</h1>
        </div>
        
        <div className="header-center">
          <button className="header-button">
            <span className="icon">🔍</span>
            Tools
          </button>
          
          <button className="header-button active">
            <span className="icon">👥</span>
            Assistants
          </button>
          
          <button className="header-button">
            <span className="icon">🕒</span>
            History
          </button>
        </div>
        
        <div className="header-right">
          <div className="user-avatar">
            {/* User avatar placeholder */}
            <div className="avatar-placeholder">#</div>
          </div>
          <span className="user-name">Robin</span>
          <div className="notifications">
            <span className="notification-badge">1</span>
          </div>
        </div>
      </header>
      
      {/* Main Chat Area */}
      <div className="main-content">
        <div className="chat-area">
          {/* Assistant Message */}
          <div className="message assistant-message">
            <div className="message-avatar">
              {/* Assistant avatar placeholder */}
              <div className="avatar-placeholder">#</div>
            </div>
            <div className="message-content">
              <p>Hello! I'm Jaxon, your AI teaching assistant. You can ask any questions related to best practices in teaching, or working with your students. Feel free to ask me for ideas for your classroom, and the more specific your questions, the better my responses will be.</p>
              <p className="highlight-text">How can I help you today?</p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="message user-message">
            <div className="message-bubble">
              Can you expand a bit more on the online coding platform?
            </div>
          </div>
          
          {/* Assistant Response */}
          <div className="message assistant-message">
            <div className="message-avatar">
              {/* Assistant avatar placeholder */}
              <div className="avatar-placeholder">#</div>
            </div>
            <div className="message-content">
              <p>Certainly! Here is a simplified explanation on online coding platforms</p>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="history-dropdown">
          <div className="dropdown-header">
            <div className="dropdown-icon">
              <span className="chat-icon">💬</span>
            </div>
            <span className="dropdown-title">Chat History</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          <div className="history-section">
            <h3 className="history-date">Today</h3>
            <div className="history-item">Discussing UX Design Principles...</div>
            <div className="history-item selected">Classroom Questions</div>
            
            <h3 className="history-date">Yesterday</h3>
            <div className="history-item">Classroom Questions</div>
            
            <h3 className="history-date">June 4, 2024</h3>
            <div className="history-item">Classroom Questions</div>
          </div>
        </div>
      </aside>
      
      {/* Input Area */}
      <div className="input-container">
        <div className="input-buttons">
          <button className="action-button">Translate</button>
          <button className="action-button">Questions</button>
          <button className="action-button active">Length</button>
          <button className="action-button">Summarize</button>
          <button className="action-button">Custom</button>
        </div>
        
        <div className="message-input-area">
          <button className="actions-button">
            <span className="actions-icon">⊕</span>
            Actions
          </button>
          <input type="text" className="message-input" placeholder="Send a message" />
        </div>
      </div>
    </div>
  );
};

export default JaxonAIChat;