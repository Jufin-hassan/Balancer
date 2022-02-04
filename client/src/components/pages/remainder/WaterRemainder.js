import React,{ useContext } from 'react';
import AuthContext from '../../../context/auth/authContext'
import img1 from '../../../asset/Water/1.jpg'
import img2 from '../../../asset/Water/2.jpg'
import img3 from '../../../asset/Water/3.jpg'
import img4 from '../../../asset/Water/4.jpg'

const WaterRemainder = () => {

    const authContext = useContext(AuthContext)
    const { user } = authContext

    const images =[img1,img2,img3,img4]
    var rand = Math.floor(Math.random() * 4)

  return <div className='remainder-card'>
       <div>
            <h2>Yolo {user && user.name}!, It's Water time!</h2>
        </div>
        <div>
            <img className='remainder-img' alt='A quote to motivate you!But you dont need a quote to get motivated, right?' src={images[rand]} />
        </div>
        <div>
            <h4 className='remainder-footer'>Be hydrated and conquer the world</h4>
        </div>
  </div>;
};

export default WaterRemainder;
