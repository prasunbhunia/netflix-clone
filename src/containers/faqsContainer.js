import React from 'react';
import faqsData from '../fixtures/faqs.json';
import { Accordion} from '../components';

import '../components/accordion/styles/accordion.scss';

function FaqsContainer() {

    return(
        <div className='container-faqs'>
            <div className='inner'>
            <h1 className='title'>Frequently Asked Questions</h1>
            { 
                faqsData.map(item =>
                    <Accordion data = {item} key={item.id} /> 
                )
            }
            <div className="opt-form">
                <input placeholder='Email Address' />
                <button>Try it now <img src="/images/icons/chevron-right.png" alt='Try Now' /></button>
                <p>Ready to watch? Enter your email to create or restart your membership </p>
            </div>
            </div>
        </div>      
    )
}

export default FaqsContainer;
