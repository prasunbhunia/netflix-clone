import React from 'react';
import './styles/footer.scss'

function Footer({children, ...restprops}) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default Footer;
