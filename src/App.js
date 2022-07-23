import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
        height = '100vh'
        projectID = 'cdaee4b4-ad28-4ed1-b332-1408fbdec364'
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;