import { Link } from 'react-router-dom';
import './chatList.css'

const ChatList = () => {
    console.log("ChatList is rendering!")

    return (
       
        <div className='chatList'>
            <span className='title'>Dashboard</span>
            <Link to='/dashboard'>Create a new chat</Link>
            <Link to='/'>Explore AskGem</Link>
            <Link to='/'>Contact</Link>
            <hr /> 
            <span className="title">RECENT CHATS</span>
            <div className="list">
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.jpeg" alt="" />
                <div className="texts">
                    <span> Upgrade to AskGem pro</span>
                    <span>Get unlimited access to all features</span>

                </div>
            </div>
        </div>
    )
}

export default ChatList;
