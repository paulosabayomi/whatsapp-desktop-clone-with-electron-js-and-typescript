import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import WrapperComponent from './components/WrapperComponent';
import ChatComponent from './components/routes-comps/ChatsComponent';
import MainChatDisplay from './components/chat-comps/MainChatDisplay';
import DefaultChatPage from './components/chat-page-comps/DefaultChatPage';
import ChatPage from './components/chat-page-comps/ChatPage';
import CallsComponent from './components/routes-comps/CallsComponent';
import StatusComponent from './components/routes-comps/StatusComponent';
import ArchiveComponent from './components/routes-comps/ArchiveComponent';
import StarComponent from './components/routes-comps/StarComponent';
import SettingsComponent from './components/routes-comps/SettingsComponent';
import SettingsDetails from './components/settings-comps/SettingsDetails';
import AppearanceSettingsDetails from './components/settings-comps/AppearanceSettingsDetails';
import React from 'react';



export default function App() {
  React.useLayoutEffect(() => {
    window.electron.ipcRenderer.getDbItem('color_mode');
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrapperComponent />}
          children={[
            <Route path="/archive" element={<ArchiveComponent />}  
              children={[
                <Route path="/archive/" element={<DefaultChatPage />}  />,
                <Route path="/archive/:conversationId" element={<ChatPage />}  />,

              ]}
            />,
            <Route path="/chat" element={<ChatComponent />}  
              children={[
                <Route path="/chat/" element={<DefaultChatPage />}  />,
                <Route path="/chat/:conversationId" element={<ChatPage />}  />,

              ]}
            />,
            <Route path="/call" element={<CallsComponent />} 
              children={[
                <Route path="/call/" element={<DefaultChatPage />}  />,
              ]}
            />,
            <Route path="/status" element={<StatusComponent />} 
              children={[
                <Route path="/status/" element={<DefaultChatPage />}  />,
              ]}
            />,
            <Route path="/starred" element={<StarComponent />} 
              children={[
                <Route path="/starred/" element={<DefaultChatPage />}  />,
              ]}
            />,
            <Route path="/settings" element={<SettingsComponent />} 
              children={[
                <Route path="/settings/" element={<DefaultChatPage />}  />,
                <Route path="/settings/chat-settings" element={<SettingsDetails />}  />,
                <Route path="/settings/appearance" element={<AppearanceSettingsDetails />}  />,
              ]}
            />,
          ]}
        
        />
      </Routes>
    </Router>
  );
}
