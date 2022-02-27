import React, { useState } from 'react';
import Player from '../player/player';

import './styles/card.scss';

export function Card({ children, Item, category, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <div className='card-container'>
            <p className='title'>{Item.title}</p>
            <div className='entities'>
                {Item.data.map((item) => (
                    <div className='item' key={item.docId} onClick={() => {
                        setItemFeature(item);
                        setShowFeature(true);
                    }}>
                        <img src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} alt={category} />
                        <div className='meta'>
                            <p className='sub-title'>{item.title}</p>
                            <p className='description'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='card-feature'>
                {showFeature ? (
                    <div className='feature' style={{ background: `url("/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg")` }}>
                        <div className='content'>
                            <p className='feature-title'>{itemFeature.title}</p>
                            <p className='text'>{itemFeature.description}</p>
                            <button className='feature-close' onClick={() => setShowFeature(false)}>
                                <img src="/images/icons/close.png" alt="Close" />
                            </button>
                            <div className='feature-group'>
                                {itemFeature.maturity >= 15 ? (<div className='maturity' style={{ backgroundColor: '#f44336' }} >
                                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                                </div>) : (<div className='maturity' style={{ backgroundColor: '#2f9600' }} >
                                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                                </div>)}
                                <p className='text' style={{fontWeight: "bold"}}>
                                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                                </p>
                            </div>
                            <button className="play-button" onClick={() => setShowPlayer((showPlayer => !showPlayer))}>Play</button>
                            <Player src="/videos/bunny.mp4" showPlayer={showPlayer} setShowPlayer={setShowPlayer} />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>

    )
}

export default function CardGroup({ children, ...restProps }) {
    return (
        <div className='card-group' {...restProps}>{children}</div>
    );
}
