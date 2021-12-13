//import logo from './logo.svg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import login from "./login";
import signup from "./signup";


function UserPage() {
  return (
    <Router>
        <div className="App">
          {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>Pharmacy Management</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
           <Container style={{ marginTop: '2%'}}>
 <Card className="my-2" style={{backgroundColor: '#bbd6e2'}}>
                <CardBody style={{marginBottom : '0.5%', marginTop: '2%',paddingBottom:'0.5%'}} >
                    <h1   className="text-center my-4">Pharmacy Management System</h1>
                    {/* <Button style = {{marginRight: '5%'}} color = "warning" onClick={()=>{
                        handleHome();
                    }}>Home</Button> */}

                    
                </CardBody>
            
            </Card>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={login} />
                <Route exact path="/sign-up" component={signup} />
              </Switch>
            </div>
          </div>
          </Container>
        </div>
        
        </Router>
       

  );
}

export default UserPage;
