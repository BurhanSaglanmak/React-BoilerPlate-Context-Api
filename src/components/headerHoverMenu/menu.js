import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    function akademiClick() {
        setIsOpen(!isOpen)
    }
    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink className="dropdown-toggle" onClick={akademiClick} >
                Page
            </NavLink>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li>
                            <NavLink to="/" >
                                Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" >
                                Page
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;