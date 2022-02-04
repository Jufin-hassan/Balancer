import React, { useState,useContext,useEffect } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import AuthContext from '../../../context/auth/authContext'

const Login = props => {

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext
    const authContext = useContext(AuthContext)
    const { login, error, clearErrors,isAuthenticated } = authContext

    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/')
        }

        if(error ==="Invalid credentials!"){
            setAlert(error,'danger')

            clearErrors()
        }
    },[error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const {email,password} = user

    const onChange = e => setUser({...user,[e.target.name]:e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if(email === '' || password=== ''){
            setAlert('Please Fill All Fields!','danger')
        }
        else{
            login({
                email,
                password
            })
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h3 className='intro-text'>Work-Life balance</h3>
                    <p>These days, work-life balance can seem like an impossible feat. Technology makes workers accessible around the clock. Fears 
                        of job loss incentivize longer hours. In fact, a whopping 94% of working professionals reported working more than 50 hours per week 
                        and nearly half said they worked more than 65 hours per week in a Harvard Business School survey. Experts agree: the compounding stress 
                        from the never-ending workday is damaging. It can hurt relationships, health and overall happiness.</p>
                </div>
                <div className="col-lg-4 ">
                    <div className='form-container'>
                        <h1>Account <span className='text-pink'>Login</span></h1>
                        <form onSubmit={onSubmit} autocomplete="off">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={email} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={password} onChange={onChange} />
                            </div>
                            <input type="submit" value="Log In" className='btn btn-block btn-pink reg-btn' />
                        </form>
                        <h4 className='sec-heading'>Don't have an account? <a href='/register' className='text-pink'>Register</a></h4>
                    </div>
                </div>
            </div>
            
        </div>
       
    )
}

export default Login
