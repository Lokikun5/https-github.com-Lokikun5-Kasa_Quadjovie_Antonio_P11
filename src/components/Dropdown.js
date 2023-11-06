import React, { useState } from 'react';
import arrow from '../assets/arrow_back_ios-24px.svg';
import '../styles/dropdown.scss';

function Dropdown({ title, content, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown-container ${className} ${isOpen ? 'open' : ''}`}>
            <div className="dropdownL" onClick={toggleDropdown}>
                <p>{title}</p>
                <img
                    src={arrow}
                    alt="la fleche"
                    className={`arrow-icon ${isOpen ? 'rotate' : ''}`}
                />
            </div>
            <div className="content">{content}</div>
        </div>
    );
}

export default Dropdown;
