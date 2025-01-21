import React from 'react';
import SocialLogin from '../SocialLogin';
import FIndUsOn from '../FIndUsOn';


const RightNavbar = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FIndUsOn></FIndUsOn>
        </div>
    );
};

export default RightNavbar;