import React,{ useContext } from 'react';
import AuthContext from '../../../context/auth/authContext'
import img1 from '../../../asset/meals/1.jpg'
import img2 from '../../../asset/meals/2.jpg'
import img3 from '../../../asset/meals/3.jpg'
import img4 from '../../../asset/meals/4.jpg'

const MealRemaider = () => {

    const authContext = useContext(AuthContext)
    const { user } = authContext

    const images =[img1,img2,img3,img4]
    var rand = Math.ceil(Math.random() * 3)

    // console.log(user.start_time);


  return <div className='remainder-card'>
        <div>
            <h2>Hey {user && user.name}!, It's Food'O'clock!</h2>
        </div>
        <div>
            <img className='remainder-img' alt='A quote to motivate you!But you dont need a quote to get motivated, right?' src={images[rand]} />
        </div>
        <div>
            <h4 className='remainder-footer'>Stay healthy and eat healthy</h4>
        </div>

  </div>;
};

export default MealRemaider;
