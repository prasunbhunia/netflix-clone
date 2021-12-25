import React from 'react';

import './styles/opt-form.scss';

function OptForm() {
    return (
        <div className="opt-form">
            <input placeholder='Email Address' />
            <button>Try it now <img src="/images/icons/chevron-right.png" alt='Try Now' /></button>
            <p>Ready to watch? Enter your email to create or restart your membership </p>
        </div>
    )
}

export default OptForm
