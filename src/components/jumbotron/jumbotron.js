import React from 'react';

import './styles/Jumbotron.scss';

function Jumbotron({children, direction, ...restProps}) {
    return (
        <div className='item'>
            <div className={`${direction ? 'inner-row':'inner-row-reverse'} inner`}>
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;
