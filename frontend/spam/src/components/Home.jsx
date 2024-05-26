import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Welcome to AI security Assistant Chat</h1>
            <p className="text-lg text-gray-600 mb-8">
                Protect your digital presence from spam messages and connect with others securely.
            </p>
            <Link
                to="/chat"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Start Chatting
            </Link>
        </div>
    );
};

export default Home;
