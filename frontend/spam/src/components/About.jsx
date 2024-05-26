import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-slate-400 text-slate-900 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About AI World</h1>
          <p className="text-lg">Discover the world of Artificial Intelligence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
               Ask the AI models to predict the spam or ham messages and filter the spam messages from the chat.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Available AI models</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">GitHub Copilot - Programming Assistant</li>
              <li className="mb-2">Alexa - Virtual Assistant</li>
              <li className="mb-2">Siri - Virtual Assistant</li>
              <li className="mb-2">Watson - Cognitive Computing</li>
              <li className="mb-2">Cortana - Virtual Assistant</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 py-8 bg-slate-400 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">Have questions? Get in touch with us!</p>
          <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default About;
