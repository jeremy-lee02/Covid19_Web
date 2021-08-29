import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import App from './App';

export default function Navigation() {
  return (
    <div className="bg-light">
    <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-secondary fixed-top">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistics">Statistics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gps">GPS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">History</Link>
            </li>
          </ul>
          <div class="d-flex position-absolute end-0 me-4">
            <Link className="btn btn-outline-primary rounded-pill me-2" to="/signIn">Sign In</Link>
            <Link className="btn btn-primary rounded-pill" to="/register">Register</Link>
          </div>
        </div>
      </nav>
      <br />
      <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/gps">
            <GPS />
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

export function Statistics() {
  return (
    <div>
      <h2>Statistics</h2>
    </div>
  )
}
export function GPS() {
  return (
    <div>
      <h2>GPS</h2>
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
    <div>
      <h2>History</h2>
    </div>
  )
}

export function SignIn() {
  return (
    <div>
      <h2>Sign In</h2>
    </div>
  )
}

export function Register() {
  return (
    <div>
      <h2>Register</h2>
    </div>
  )
}
