import React from 'react';

import './styles/header.scss'; 

function Header({children}) {
    return (
        <div className='header_background' style={{ backgroundImage: 'url("../images/misc/home-bg.jpg")'}}> 
            {children}
        </div>
    )
}

export default Header;
