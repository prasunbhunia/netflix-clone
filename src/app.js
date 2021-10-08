import React from 'react';
import JumbotronContainer from './containers/jumbotronContainer';
import FooterContainer from './containers/footerContainer';
import FaqsContainer from './containers/faqsContainer';

function app() {
  return(
  <>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
  );
}

export default app;
