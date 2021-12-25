import React from 'react';
import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm} from '../components';


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
                <OptForm />
            </div>
        </div>      
    )
}

export default FaqsContainer;
