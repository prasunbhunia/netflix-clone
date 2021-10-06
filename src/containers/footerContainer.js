import React from 'react';
import { Footer } from '../components';

function FooterContainer() {
    return (
        <Footer>
            <p className='title'>Questions? Contact us.</p><div className='break' />
            <div className='row'>
                <div className='column'>
                    <a href='./' className='link'>FAQ</a> 
                    <a href='./' className='link'>Invester Relation</a> 
                    <a href='./' className='link'>Ways to Watch</a> 
                    <a href='./' className='link'>Coporate Information</a> 
                    <a href='./' className='link'>Netflix originals</a> 
                </div>
                <div className='column'>
                    <a href='./' className='link'>Help Center</a> 
                    <a href='./' className='link'>Jobs</a> 
                    <a href='./' className='link'>Terms of Use</a> 
                    <a href='./' className='link'>Contact Us</a> 
                </div>
                <div className='column'>
                    <a href='./' className='link'>Account</a> 
                    <a href='./' className='link'>Redem Gift Card</a> 
                    <a href='./' className='link'>Privacy</a> 
                    <a href='./' className='link'>Speed Test</a> 
                </div>
                <div className='column'>
                    <a href='./' className='link'>Media Center</a> 
                    <a href='./' className='link'>Buy Gift Card</a> 
                    <a href='./' className='link'>Cookie Prefrencee</a> 
                    <a href='./' className='link'>legal  Notices</a> 
                </div>
            </div>
            <p className='text'>Netflix India</p>
        </Footer>
    );
}

export default FooterContainer;
