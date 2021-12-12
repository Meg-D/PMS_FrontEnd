//import logo from './logo.svg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";
import login from "./login";
import signup from "./signup";

function UserPage() {
  return (
    <Router>
        <div className="App">
          
          {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              {/* <Link className="navbar-brand" to={"/sign-in"}>Pharmacy Management</Link>
              Pharmacy management system
              <br>
              </br>
              <br>
              </br>
              <div className="navbar" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>signup</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
          <p>Pharmacy management system</p>
          <p className="forgot-password text-right">
                    <a href="/login">sign in</a>
                    </p>
                    <p className="forgot-password text-right">
                   <a href="/sign-up">sign up</a>
                    </p>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/* <Route exact path='/' component={login} /> */}
                <Route exact path="/sign-in" component={login} />
                <Route exact path="/sign-up" component={signup} />
              </Switch>
            </div>
          </div>
        </div>
        </Router>

  );
}

export default UserPage;