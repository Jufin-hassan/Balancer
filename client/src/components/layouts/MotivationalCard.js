import React from 'react';
import nelson from '../../asset/motivational/nelson.jpg'
import apj from '../../asset/motivational/apj.jpg'

const MotivationalCard = () => {
  return <div>
  <div className='motivational-card'>
        <div>
            <h2 className='grid-2 motivational-head'>“Everyone can rise above their circumstances and achieve success if they are 
                        dedicated to and passionate about what they do.”</h2>
        </div>
        <div >
            <img className='motivational-img' alt='A quote to motivate you!But you dont need a quote to get motivated, right?' src={nelson} />
        </div>
        </div>
    <div className='motivational-card'>
        <div>
            <h2 className='grid-2 motivational-head'>“Creativity is seeing the same thing but thinking differently”</h2>
        </div>
        <div >
            <img className='motivational-img' alt='A quote to motivate you!But you dont need a quote to get motivated, right?' src={apj} />
        </div>
    </div>
  </div>;
};

export default MotivationalCard;
