import React from 'react';
import LeftTitle from './LeftTitle';
import RightPara from './RightPara';

const UpperSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-56'>
             
                <LeftTitle/>
                <RightPara/>
          
        </div>
    );
};

export default UpperSection;