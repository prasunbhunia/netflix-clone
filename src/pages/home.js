import React from 'react';
import JumbotronContainer from '../containers/jumbotronContainer';
import FooterContainer from '../containers/footerContainer';
import FaqsContainer from '../containers/faqsContainer';
import HeaderContainer from '../containers/headerContainer';
import { Features, OptForm } from '../components';

function home() {
    return (
        <>
            <HeaderContainer>
                <Features><OptForm/></Features>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
                 
    )
}
 
 export default home;