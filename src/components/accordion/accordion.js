import React, { useState } from 'react'

import './styles/accordion.scss';

function Accordion({children, data, ...restProps}) {
    const [toogleShow, setToogleShow] = useState(false);
   
    return (
        <div className='item'>
            <div className='header' onClick={() => setToogleShow((toogleShow) => !toogleShow)}>
                { data.header }
                { toogleShow ? (
                    <img src='/images/icons/close-slim.png' alt='Close' />) : 
                    ( <img src='/images/icons/add.png' alt='Open' /> )}
            </div>
            {
                toogleShow ? (
                    <div className='body'>
                        {data.body}
                    </div>
                ) : (null)
            }
        </div>
    )
}


export default Accordion;
