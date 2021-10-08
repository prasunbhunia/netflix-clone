import React from 'react';
import './styles/footer.scss'

function Footer({children, ...restprops}) {
    return (
        <div className='container-footer'>
            {children}
        </div>
    )
}

export default Footer;
