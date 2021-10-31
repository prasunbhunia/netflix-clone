import React from 'react'
import JumbotronContainer from '../containers/jumbotronContainer';
import FooterContainer from '../containers/footerContainer';
import FaqsContainer from '../containers/faqsContainer';

function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />     
        </>
    )
}
 
 export default Home;