import React, { Fragment, useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext' 



export const Navbar = ({icon,title}) => {

    const authContext = useContext(AuthContext)
    const {isAuthenticated,user,logout} = authContext


    const onCLick = () => {
        logout()
    } 

    const authLinks = (
        <Fragment className='navbar'>
            <ul>
                <li className="hello third-heading nav-item">Hello {user && user.name}</li>
                <li className="nav-item"><a onClick={onCLick} href="#!">
                    <i className="fas fa-sign-out-alt nav-link"></i><span className="hide-sm third-heading">Logout</span>
                </a></li>
            </ul>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                 <Link className='third-heading nav-link' to='/register'>Register</Link>
            </li>
             <li className="nav-item">
                <Link className='third-heading nav-link' to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark  navbar-expand-lg">
            <h1>
                <a href="/login" className='navbar-brand'><i class="fas fa-balance-scale"></i>{title}</a>
            </h1>

            <button style={{right:0,float:'right'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                 <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse ml-auto" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
               {isAuthenticated ? authLinks : guestLinks}
            </ul>
            </div>
            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    title:"Balancer",
    icon:'fas fa-address-book'
}

{/* <i class="fas fa-address-book"></i> */}