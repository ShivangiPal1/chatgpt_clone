import { Link } from 'react-router-dom';
import './chatList.css';

const chats = [
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
  {
    title: 'Taj mahal insights',
    description: 'Located in Agra, India, it is one of the 7 wonders of the world...'
  },
];

const ChatList = () => {
  return (
    <div className="chat-container">
      <div className="header">
        <div className="avatar"></div>
        <h2>My Chats</h2>
      </div>

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search" />
      </div>

      <h3 className="chat-title">Chats</h3>

      <div className="chat-list">
        {chats.map((chat, index) => (
          <div className="chat-card" key={index}>
            <span className="chat-icon">💬</span>
            <div className="chat-info">
              <strong>{chat.title}</strong>
              <p>{chat.description}</p>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default ChatList;
