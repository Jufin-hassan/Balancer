import React, { useState,useContext, useEffect } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import AuthContext from '../../../context/auth/authContext'

const Register = props => {

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext
    const authContext = useContext(AuthContext)
    const { register, error, clearErrors,isAuthenticated } = authContext

    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/')
        }

        if(error ==="User already exists!"){
            setAlert(error,'danger')

            clearErrors()
        }
    },[error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        breakfast:'',
        lunch:'',
        dinner:'',
        start_time:'',
        end_time:''

    })

    const {name,email,password,breakfast,lunch,dinner,start_time,end_time} = user

    const onChange = e => setUser({...user,[e.target.name]:e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if (name === '' || email === '' || password === '' || start_time === '' || end_time === '' || breakfast === '' || lunch === '' || dinner === '') {
            setAlert('Please fill all fields!','danger')
        }else if(start_time.length != 5 || end_time.length != 5 || breakfast.length != 5 || lunch.length != 5 || dinner.length != 5 ){
            setAlert('Enter timing in 24hr format. eg 09.00, 05.00, 15.00, 21.00','danger')
        }else if(password.length < 6){
            setAlert('Password must be greater than 6 characters')
        }else if(isNaN(Number(start_time)) || isNaN(Number(end_time)) || isNaN(Number(breakfast)) || isNaN(Number(lunch)) || isNaN(Number(dinner)) ){
            setAlert('Enter timing in 24hr format. eg 09.00, 05.00, 15.00, 21.00','danger')
        }
        else{
            register({
                name,
                email,
                password,
                breakfast,
                lunch,
                dinner,
                start_time,
                end_time
            })
        }
    }

    return (
        <div className='form-container'>
            <h1>Account <span className='text-green'>Register</span></h1>
            <form onSubmit={onSubmit} autocomplete="off">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='Eg. John' value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="emial">Email</label>
                    <input type="email" name="email" placeholder='Eg. John@gmail.com' value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Eg. ******' value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="start_time">Work Starting Time</label>
                    <input type="text" name="start_time" placeholder='Eg. 08.00, 14.00, 21.00' value={start_time} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="end_time">Work Ending Time</label>
                    <input type="text" name="end_time" placeholder='Eg. 08.00, 14.00, 21.00' value={end_time} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="breakfast">Breakfast</label>
                    <input type="text" name="breakfast" placeholder='Eg. 08.00, 14.00, 21.00' value={breakfast} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lunch">Lunch</label>
                    <input type="text" name="lunch" placeholder='Eg. 08.00, 14.00, 21.00' value={lunch} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dinner">Dinner</label>
                    <input type="text" name="dinner" placeholder='Eg. 08.00, 14.00, 21.00' value={dinner} onChange={onChange} />
                </div>
                
                <input type="submit" value="Register" className='btn btn-block btn-pink reg-btn' />
            </form>
        </div>
    )
}

export default Register
