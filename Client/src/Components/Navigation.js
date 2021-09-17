import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import App from '../App';
import ProfilePage from './ProfilePage';
import "../App.css";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HealthForm from './Form/HealthForm';
import Buttons from './Buttons';
import Success from './Success';
import HistoryCard from './HistoryCard';

export default function Navigation() {


  return (
    <div className="bg-light">
    <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-secondary fixed-top">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {localStorage.getItem('authToken')
              ? <Link className="nav-link" to="/profile" >Profile</Link>
              : <Link className="nav-link" to="/signIn" >Profile</Link>
            }
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/form">Form</Link>
            </li>
            <li className="nav-item">
              {localStorage.getItem('authToken')
              ? <Link className="nav-link" to="/history">History</Link>
              : <Link className="nav-link" to="/signIn">History</Link>
            }
            </li>
          </ul>
          <div class="d-flex position-absolute end-0 me-4"> 
            <Buttons />
          </div>
        </div>
      </nav>
      <br />
      <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route exact path="/profile" >
            <Profile />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
    </Router>
    </div>
  )
}
export function Home() {
  return (
    <div className="bg-secondary">
      <div className ="backGroundImg2"></div>
      <div className ="row">
        <div className ="col-sm-3 contain">
          <h2 className= "text-warning">Creators: </h2>
          <br/>
          <li>Nguyen Truong An (s3778388)</li>
          <br/>
          <li>Le Trung Tin (s3752975)</li>
          <br/>
          <li>Nguyen Dang Huy (s3741303)</li>
          <br/>
          <li>Nguyen Thanh Linh (s3635080)</li>
          <br/>
          <li>Nguyen Xuan Hoang Phuc (s3595035)</li>
          <br/>
          <p className="text-center">__________</p>
        </div>
        <div className = "col-sm-9 backGroundImg contain">
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="text-center text-warning">Welcome to Our Covid Tracker App</h1>
          <br/>
          <br/>
          <br/>
          <h6 className="formstyle text-center text-light"><button className="bContain">In order to protected yourself, using the Tracker below to learn more about Covid cases!</button></h6>
        </div>
      </div>
      <div>
        <App />
      </div>
    </div>
  )
}

export function Form() {
  return (
    <div className="bg-secondary">
      <HealthForm />
    </div>
  )
}

export function Profile() {
  return (
    <div className = "bg-secondary"> 
      <br/>
      <h1 className="text-center">Profile</h1><br />
      <ProfilePage />
    </div>
  )
}


export function SignIn() {
  return (
    <div>
      <div className="backGroundImg2"></div>
      <div className = "bg-secondary">
        <LoginForm />
      </div>
    </div>

  )
}

export function Register() {
  return (
    <div>
      <div className="backGroundImg2"></div>
      <div className = "bg-secondary">
        <RegisterForm />
      </div>
    </div>
  )
}
export function History(){
  return(
    <div >
    <div className = "bg-secondary">
      <HistoryCard />
    </div>
  </div>
    
  )
}


