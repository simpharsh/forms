import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">MultiFormModule</div>
            <nav className="nav">
                <NavLink to="/form1" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Form 1 (Simple)
                </NavLink>
                <NavLink to="/form2" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Form 2 (Medium)
                </NavLink>
                <NavLink to="/form3" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Form 3 (Advanced)
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
