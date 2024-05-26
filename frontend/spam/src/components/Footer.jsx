import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 mt-auto align-bottom">
         <div className="container mx-auto text-center">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                        <h4 className="text-2xl font-semibold">AI World</h4>
                        <p className="text-gray-500 mt-2">Exploring the world of AI technologies</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                        <ul className="flex justify-center space-x-6">
                            <li><a href="/" className="hover:text-blue-500">Home</a></li>
                            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                            <li><a href="/about" className="hover:text-blue-500">About</a></li>
                            <li><a href="/login" className="hover:text-blue-500">Account</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-right">
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="https://twitter.com" className="text-gray-500 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.973 9.973 0 0 1-2.857.782 4.938 4.938 0 0 0 2.165-2.724 9.873 9.873 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.385 4.482A13.934 13.934 0 0 1 1.671 3.149 4.918 4.918 0 0 0 3.195 9.723a4.911 4.911 0 0 1-2.229-.616v.06a4.916 4.916 0 0 0 3.946 4.827 4.904 4.904 0 0 1-2.224.084 4.918 4.918 0 0 0 4.6 3.417 9.86 9.86 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.069a13.933 13.933 0 0 0 7.548 2.209c9.054 0 14.002-7.496 14.002-13.987 0-.214-.004-.428-.015-.641a9.936 9.936 0 0 0 2.457-2.545z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" className="text-gray-500 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82V14.706h-3.09v-3.616h3.09V8.303c0-3.066 1.872-4.736 4.605-4.736 1.311 0 2.438.097 2.762.141v3.204l-1.894.001c-1.485 0-1.772.706-1.772 1.74v2.283h3.543l-.462 3.616h-3.081V24h6.038c.733 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" className="text-gray-500 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.998 3h-16C1.791 3 1 3.791 1 4.998v16.004C1 22.209 1.791 23 2.998 23h16.004C22.209 23 23 22.209 23 21.002V4.998C23 3.791 22.209 3 21.002 3zM8.479 19.566H5.637V10.25h2.842v9.316zM7.058 9.072c-.914 0-1.657-.744-1.657-1.658S6.144 5.757 7.058 5.757c.913 0 1.657.743 1.657 1.657 0 .914-.744 1.658-1.657 1.658zM19.566 19.566h-2.842v-4.761c0-1.135-.022-2.591-1.579-2.591-1.58 0-1.823 1.233-1.823 2.508v4.844H10.48V10.25h2.726v1.27h.038c.38-.718 1.309-1.477 2.696-1.477 2.881 0 3.412 1.895 3.412 4.36v5.163z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-500">&copy; 2024 AI World. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
