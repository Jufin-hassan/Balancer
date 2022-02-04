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
        if (name === '' || email === '' || password === '') {
            setAlert('Please fill all fields!','danger')
        }else{
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
            <h1>Account <span className='text-pink'>Register</span></h1>
            <form onSubmit={onSubmit} autocomplete="off">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="emial">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="start_time">Work Starting Time</label>
                    <input type="text" name="start_time" value={start_time} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="end_time">Work Ending Time</label>
                    <input type="text" name="end_time" value={end_time} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="breakfast">Breakfast</label>
                    <input type="text" name="breakfast" value={breakfast} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lunch">Lunch</label>
                    <input type="text" name="lunch" value={lunch} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dinner">Dinner</label>
                    <input type="text" name="dinner" value={dinner} onChange={onChange} />
                </div>
                
                <input type="submit" value="Register" className='btn btn-block btn-pink reg-btn' />
            </form>
        </div>
    )
}

export default Register
