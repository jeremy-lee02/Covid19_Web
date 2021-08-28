import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import App from './App';

export default function Navigation() {
  return (
    <div className="bg-dark">
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
            <App />
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
    <div className="bg-dark">
      <div className = "backGroundImg">
        <br/>
        <h1 className="text-center text-danger">Welcome to Our Covid App</h1>
        <h5 className="text-center text-body">Educated your self better using this application</h5>
        <br/>
        <br/>
        <br/>
        <div className="d-flex position-absolute formstyle">
        <form>
            <div class="form-floating mb-3 shadow">
                <input type="text" class="form-control" id="Text" placeholder="First Name"></input>
                <label class="text-secondary" for="Text">First Name</label>
            </div>
            <div class="form-floating mb-3 shadow">
                <input type="email" class="form-control" id="Email" placeholder="Email Address"></input>
                <label class="text-secondary" for="Email">Email Address</label>
            </div>
            <div class="form-floating mb-3 shadow">
                <input type="password" class="form-control" id="Password" placeholder="Email Password"></input>
                <label class="text-secondary" for="Email">Password</label>
            </div>
            <br />
            <button type="submit" class="btn btn-primary rounded-pill">Take part in the App now!</button>
            <a href="#" class="ms-3">
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
                    alt="" width="30" height="24" class="rounded-circle shadow"></img>
            </a>
            <a href="#" class="ms-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                    alt="" width="30" height="24" class="rounded-circle shadow"></img>
            </a>
        </form>
        </div>
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
