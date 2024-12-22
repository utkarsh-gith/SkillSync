import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setHidden(true);
            } else {
                // Scrolling up
                setHidden(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`shadow sticky z-50 top-0 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to='/' className="flex items-center">
                        <img src="/assets/Logo.jpeg" className="mr-3 h-12" alt="Logo" />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            LogIn/SignUp
                        </Link>
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700 ' : 'text-gray-700'
                                        } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/todo"
                                    className={({ isActive }) =>
                                        `block py-2 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700 ' : 'text-gray-700'
                                        } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Goal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/collab"
                                    className={({ isActive }) =>
                                        `block py-2 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700 ' : 'text-gray-700'
                                        } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Collab
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courcerecommend"
                                    className={({ isActive }) =>
                                        `block py-2 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700 ' : 'text-gray-700'
                                        } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Course Recommendation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700 ' : 'text-gray-700'
                                        } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
