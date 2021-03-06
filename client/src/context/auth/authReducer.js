import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
    } from '../types'

    export default (state,action) => {
        switch(action.type){

            case REGISTER_SUCCESS:
            case LOGIN_SUCESS:
                localStorage.setItem('token',action.payload.token)
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated:true,
                    loading:false
                }

            case USER_LOADED:
                return {
                    ...state,
                    user:action.payload,
                    isAuthenticated:true,
                    loading:false
                }

            case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT:
                localStorage.removeItem('token')
                return {
                    ...state,
                    isAuthenticated:null,
                    loading:false,
                    user:null,
                    error:action.payload
                }

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null
                }

             default:
                return state
        }
    }