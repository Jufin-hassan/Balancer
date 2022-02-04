import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth/authContext'
import MotivationalCard from '../layouts/MotivationalCard'
import MealRemaider from './remainder/MealRemaider'
import WaterRemainder from './remainder/WaterRemainder'
import BreakRemainder from './remainder/BreakRemainder'
var CronJob = require('cron').CronJob

const Home = () => {
    
    
    const authContext = useContext(AuthContext)
    const { user } = authContext
   
     useEffect(()=>{
        authContext.loadUser()
     },[])
    
    const [mealremaider,setMealremainder]=useState(false)
    const [waterRemainder,setWaterRemainder] = useState(false)
    const [restRemainder,setRestRemainder] = useState(false)

    if(user !== null){
    var breakfastJob = new CronJob(`0 ${user.breakfast[3]+user.breakfast[4]} ${user.breakfast[0]+user.breakfast[1]} * * *`,  function() {
       setMealremainder(true)
       setTimeout(() => {
           setMealremainder(false)
       }, 10000);
       }, null, true, 'Asia/Kolkata');
       breakfastJob.start();
    }

    if(user !== null){
    var lunchJob = new CronJob(`0 ${user.lunch[3]+user.lunch[4]} ${user.lunch[0]+user.lunch[1]} * * *`,  function() {
       setMealremainder(true)
       setTimeout(() => {
           setMealremainder(false)
       }, 10000);
       }, null, true, 'Asia/Kolkata');
        lunchJob.start();
    }

    if(user !== null){
        var dinnerJob = new CronJob(`0 ${user.dinner[3]+user.dinner[4]} ${user.dinner[0]+user.dinner[1]} * * *`,  function() {
           setMealremainder(true)
           setTimeout(() => {
               setMealremainder(false)
           }, 10000);
           }, null, true, 'Asia/Kolkata');
            dinnerJob.start();
        }

        if(user !== null){
            var waterJob = new CronJob(`0 0 ${user.start_time[0]+user.start_time[1]}-${user.end_time[0]+user.end_time[1]} * * *`,  function() {
               setWaterRemainder(true)
               setTimeout(() => {
                   setWaterRemainder(false)
               }, 10000);
               }, null, true, 'Asia/Kolkata');
                waterJob.start();
        }

        if(user !== null){
            var restJob = new CronJob(`0 */2 ${user.start_time[0]+user.start_time[1]}-${user.end_time[0]+user.end_time[1]} * * *`,  function() {
               setRestRemainder(true)
               setTimeout(() => {
                   setRestRemainder(false)
               }, 10000);
               }, null, true, 'Asia/Kolkata');
                restJob.start();
        }
  
    return (
        <div>
           {mealremaider ? <MealRemaider /> : null}
           {waterRemainder ? <WaterRemainder /> : null}
           {restRemainder ? <BreakRemainder /> : null}
           <MotivationalCard />
        </div>
    )
}

export default Home
