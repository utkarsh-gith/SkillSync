import React, { useState, useEffect } from 'react';
import Header from './header/header';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <>
            <Header />
            <div className="flex items-center justify-end p-4">
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none rounded-lg p-2.5"
                >
                    <img
                        src={isDarkMode ? '/assets/Sun.png' : '/assets/moon (1).png'}
                        alt={isDarkMode ? 'Sun Icon' : 'Moon Icon'}
                        className="w-6 h-6"
                    />
                </button>
            </div>
            <Outlet />
        </>
    );
}

export default Layout;
