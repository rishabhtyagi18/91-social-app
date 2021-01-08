import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header d-flex justify-content-between">
            <img 
                src="https://static.wixstatic.com/media/6c3f59_369b7e8ff04545b5af3d587ac3804d0d~mv2.png/v1/fill/w_130,h_50,al_c,q_85,usm_0.66_1.00_0.01/Logo.webp"
                className="logo"
                alt="logo"
            />
        </div>
    );
};

export default Header;
