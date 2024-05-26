import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Chat from './components/Chat';
import ChatSessions from './components/chat_sessions';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chatsession' element={<ChatSessions />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     <div className='bg-gray-900 text-gray-300 py-6 align-bottom'>
     <Footer />
      </div>
    </Router>
  );
}

export default App;
