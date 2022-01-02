import React from 'react';

import './styles/header.scss'; 

function Header({children, backgroundUrl}) {
    return (
        <div className='header_background' style={{ backgroundImage: `${backgroundUrl}`}}> 
            {children}
        </div>
    )
}

export default Header;
