import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import App from '../App';
import DisplayHis from './DisplayHis';
import "../App.css";
import LoginForm from './LoginForm';
// import "./Table.css";
import RegisterForm from './RegisterForm';
import HealthForm from './Form/HealthForm';

export default function Navigation() {
  const user = null;
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
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">History</Link>
            </li>
          </ul>
          <div class="d-flex position-absolute end-0 me-4">
            {user?(
              <Link className="btn btn-primary rounded-pill me-3" >Log Out</Link>
              
            ):(
              <>
                <Link className="btn btn-primary rounded-pill me-3" to="/signIn">Sign In</Link>
                <Link className="btn btn-primary rounded-pill" to="/register">Register</Link>  
              </>

            )}
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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
    </Router>
    </div>
  )
}
export function Home() {
  return (
    <div className="bg-secondary">
      <div className = "backGroundImg">
        <br/>
        <h1 className="text-center text-danger">Welcome to Our Covid Tracker App</h1>
        <h6 className="text-center text-body">Educated your self better using this application</h6>

        <h6 className="formstyle text-center text-light"><button>For protected yourself, using the Tracker below to learn more about Covid cases!</button></h6>
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
    <div>
      <h2>Profile</h2>
    </div>
  )
}

export function History() {
  return (
    <div className="bg-secondary"><br/>
      <div>
        <div style={{padding:".5em 1.5em"}}><h1 className="text-center">History</h1></div>
        <DisplayHis />
      </div>

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
