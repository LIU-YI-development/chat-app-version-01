import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="ddad1056-1c7d-4d3c-97b3-8ebf8ff4c9fa"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
