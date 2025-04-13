import React from 'react';
import LeftTitle from './LeftTitle';
import RightPara from './RightPara';

const UpperSection = () => {
    return (
        <div className='flex justify-between items-center gap-56'>
             
                <LeftTitle/>
                <RightPara/>
          
        </div>
    );
};

export default UpperSection;