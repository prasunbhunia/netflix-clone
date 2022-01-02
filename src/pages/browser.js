import React from 'react';
import BrowserContainer from '../containers/browserContainer';
import { UseContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';


function Browser() {

    const  {series} = UseContent('series');
    const  {films} = UseContent('films');

    const slides = selectionFilter({series, films});

    return (
        <BrowserContainer slides= {slides} /> 
    )
}

export default Browser;
