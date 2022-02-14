import React from 'react'
import ReactDOM from 'react-dom';

import './styles/player.scss';

function Player({ src, showPlayer, setShowPlayer }) {

    return showPlayer ? ReactDOM.createPortal(
        <div className='player-overlay' data-testid="player">
            <div className='inner'>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <button className='close' onClick={() => setShowPlayer((showPlayer) => !showPlayer)} />
            </div>
        </div>,
        document.body) : null;
}

export default Player