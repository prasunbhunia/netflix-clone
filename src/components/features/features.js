import React from 'react';

import './styles/features.scss';

function Features({children}) {
    return (
        <div className='feature-container'>
            <h1 className='title'>Unlimited films, TV programmes and more.</h1>
            <h2 className='subtitle'>Watch Anywhere. Cancel Anytime</h2>
            {children}
        </div>
    )
}

export default Features; 
