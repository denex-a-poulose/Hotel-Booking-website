import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className='bg-primary-blue '>
                <p className='text-white text-[14px] font-[300] text-center py-2'>
                    Copyright {currentYear} • All rights reserved • Salman Faris
                </p>
            </div>
        </div>
    );
};

export default Footer;
