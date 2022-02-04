import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Navbar} from './components/layouts/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'
import Alert from './components/layouts/Alert'
import setAuthToken from './utils/setAuthToken' 

import PrivateRoute from './components/routing/PrivateRoute'

import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'

 //global header
 if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Alert />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
    </AuthState>
  );
}

export default App;
