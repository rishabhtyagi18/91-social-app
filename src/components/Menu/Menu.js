import React from 'react';
import './Menu.css';

const Menu = () => {

    const isEqual = (item1, item2) => {
        if (typeof (item1) === 'number' && typeof (item2) === 'number') {
            return item1 === item2;
        }
        if (typeof (item1) === 'string' && typeof (item2) === 'string') {
            return item1.toLowerCase() === item2.toLowerCase();
        }
    };

    return (
        <div className="menu">
            <a href='/history'>
                <div 
                    className={isEqual(window.location.pathname, '/history') ? 'active' : '' }
                >
                    History
                </div>
            </a>
            <a href='/address'>
                <div 
                    className={isEqual(window.location.pathname, '/Address') ? 'active' : '' }
                >
                    Address
                </div>
            </a>
        </div>
    );
};

export default Menu;
