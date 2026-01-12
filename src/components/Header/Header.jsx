import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/ahf-logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy for active section
            const sections = ['about', 'tokenomics', 'roadmap', 'whitepaper', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            // If at top, set home as active
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '/', isHome: true, sectionId: '' },
        { label: 'About', href: '#about', sectionId: 'about' },
        { label: 'Tokenomics', href: '#tokenomics', sectionId: 'tokenomics' },
        { label: 'Roadmap', href: '#roadmap', sectionId: 'roadmap' },
        { label: 'White Paper', href: '#whitepaper', sectionId: 'whitepaper' },
        { label: 'Contact', href: '#contact', sectionId: 'contact' },
        { label: 'Buy Now', href: '/login', sectionId: '' },
    ];

    const scrollToSection = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();

            // If we are not on home page, navigate to home first
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation then scroll (basic implementation)
                setTimeout(() => {
                    const sectionId = href.substring(1);
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                const sectionId = href.substring(1);
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            setIsMenuOpen(false);
        }
    };

    const handleNavClick = (e, item) => {
        if (item.external) {
            return;
        }

        if (item.isHome) {
            e.preventDefault();
            if (location.pathname !== '/') {
                navigate('/');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
        } else if (item.href.startsWith('#')) {
            scrollToSection(e, item.href);
        }
    };

    const isActive = (item) => {
        if (item.isHome && activeSection === '' && location.pathname === '/') {
            return true;
        }
        return activeSection === item.sectionId;
    };

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-wrapper">
                <div className="container">
                    <div className="nav-content">
                        <div className="site-logo">
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <img src={logo} alt="AHF Site Logo" width="70" />
                            </Link>
                        </div>

                        <nav className={`main-menu ${isMenuOpen ? 'active' : ''}`}>
                            {/* Mobile Close Button */}
                            <button
                                className="mobile-close-btn"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="menu-list">
                                {navItems.map((item, index) => (
                                    <li key={index} className={isActive(item) ? 'active' : ''}>
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="nav-link-label">{item.label}</span>
                                            </a>
                                        ) : item.href.startsWith('#') || item.isHome ? (
                                            <a
                                                href={item.href}
                                                onClick={(e) => handleNavClick(e, item)}
                                                className={isActive(item) ? 'active' : ''}
                                            >
                                                <span className="nav-link-label">{item.label}</span>
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span className="nav-link-label">{item.label}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <Link className="get-started-btn" to="/login">
                                <span className="btn-icon">
                                    <svg height="25" width="25" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                        <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                                    </svg>
                                </span>
                                <span className="btn-label">Get Started</span>
                            </Link>

                            <button
                                className="mobile-menu-btn"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle navigation"
                            >
                                <svg height="25" width="25" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
