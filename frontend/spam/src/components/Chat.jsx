import React from 'react';
import logo_name from '../imges/logo.jpeg';
import { Link } from 'react-router-dom';

const AIList = [
    {
        id: 1,
        name: 'Gmail Tibeka',
        type: 'Spam detector AI Assistant',
        description: 'A spam detector AI Assistant that helps you detect spam messages in your Gmail account.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        chat_link: '/chatsession',
    },
    {
        id: 1,
        name: 'GitHub Copilot',
        type: 'Programming Assistant',
        description: 'A programming assistant that helps you write code faster.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        chat_link: '/chat',
    },
    {
        id: 2,
        name: 'Alexa',
        type: 'Virtual Assistant',
        description: 'Amazon\'s virtual assistant for your smart home.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        chat_link: '/chat',
    },
    {
        id: 3,
        name: 'Siri',
        type: 'Virtual Assistant',
        description: 'Apple\'s virtual assistant integrated into iOS devices.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        chat_link: '/chat',
    },
    {
        id: 4,
        name: 'Watson',
        type: 'Cognitive Computing',
        description: 'IBM\'s AI platform for business solutions.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        chat_link: '/chat',
    },
    {
        id: 5,
        name: 'Cortana',
        type: 'Virtual Assistant',
        description: 'Microsoft\'s virtual assistant for Windows devices.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        chat_link: '/chat',
    },
];

const Chat = () => {
    return (
        <div className="bg-slate-200 text-blue-900 p-8">
            <h2 className="text-3xl font-bold mb-4">Select an AI:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {AIList.map((ai) => (
                    <Link to={ai.chat_link}>
                    <div key={ai.id} className="bg-white rounded-lg shadow-md p-6">
                        <img src={logo_name} alt={ai.name} className="w-full h-40 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{ai.name}</h3>
                            <p className="text-gray-500 mb-2">{ai.type}</p>
                            <p className="text-gray-700">{ai.description}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Chat;
