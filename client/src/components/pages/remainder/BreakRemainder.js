import React,{ useContext } from 'react';
import AuthContext from '../../../context/auth/authContext'
import img1 from '../../../asset/break/1.jpg'
import img2 from '../../../asset/break/2.jpg'
import img3 from '../../../asset/break/3.jpg'
import img4 from '../../../asset/break/4.jpg'
import img5 from '../../../asset/break/5.jpg'
import img6 from '../../../asset/break/6.jpg'
import img7 from '../../../asset/break/7.jpg'

const BreakRemainder = () => {

    const authContext = useContext(AuthContext)
    const { user } = authContext

    const images =[img1,img2,img3,img4,img5,img6,img7]
    var rand = Math.ceil(Math.random() * 6)

  return <div className='remainder-card'>
       <div>
            <h2>Hello {user && user.name}!, Mind your posture!</h2>
        </div>
        <div>
            <img className='remainder-img' alt='A quote to motivate you!But you dont need a quote to get motivated, right?' src={images[rand]} />
        </div>
        <div>
            <h4 className='remainder-footer'> Pull your shoulders back and lift your chest. Keep in mind that even sitting in 
            the “correct” position for long periods of time will eventually become uncomfortable.</h4>
        </div>
  </div>;
};

export default BreakRemainder;
