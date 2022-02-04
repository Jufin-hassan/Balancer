import React,{useReducer} from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
UPDATE_USER,
AUTH_ERROR,
LOGIN_SUCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERRORS
} from '../types'

const AuthState = props => {
   const initialState = {
       token:localStorage.getItem('token'),
       user:null,
       loading:true,
       error:null,
       isAuthenticated:null
    }

    const [state,dispatch] = useReducer(authReducer,initialState)

    //Load user
    const loadUser = async () => {
        //global header
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/api/auth')
           

            dispatch({
                type:USER_LOADED,
                payload:res.data.user
            })
        } catch (err) {
            dispatch({
                type:AUTH_ERROR
            })
        }
    } 


    //register User
    const register = async formData => {
        const config = {
            headers:{
                'content-type' : 'application/json'
            }
        }

        try {
           const res = await axios.post("/api/user",formData,config)
             dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })

            loadUser()
        } catch (err) {
            dispatch({
                type:REGISTER_FAIL,
                payload:err.response.data.msg
            })
        }
    }

    

    //login User
    const login = async formData => {
        const config = {
            headers:{
                'content-type' : 'application/json'
            }
        }

        try {
           const res = await axios.post("/api/auth",formData,config)

             dispatch({
                type:LOGIN_SUCESS,
                payload:res.data
            })

            loadUser()
        } catch (err) {
            dispatch({
                type:LOGIN_FAIL,
                payload:err.response.data.msg
            })
        }
    }


    //Logout
    const logout = () => {
        dispatch({type:LOGOUT})
    }

    //Clear errors
    const clearErrors = () => {
        dispatch({type:CLEAR_ERRORS})
    }
    
    return (
    <AuthContext.Provider
        value={{
            token:state.token,
            user:state.user,
            loading:state.loading,
            error:state.error,
            isAuthenticated:state.isAuthenticated,
            register,
            loadUser,
            clearErrors,
            login,
            logout
        }}
        >
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthState