import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Articles', path: '/articles' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const linkClasses = 'hover:underline text-sm';

    return (
        <nav className="bg-black text-white p-4 pr-6">
            <div className="flex items-center justify-between">
                <Logo />

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path} className={linkClasses}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <ul className="md:hidden mt-4 space-y-3">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={linkClasses}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
