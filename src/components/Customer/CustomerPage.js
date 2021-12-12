import React from 'react';
import AddCustomer from './AddCustomer';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import CustomerMenu from './CustomerMenu';
import Customerhistory from './CustomerHistory';
const customerPage=(props)=>{
    const handleHome=()=>{
        let path = "/menu";
        props.history.push(path);
    }

    const handleLogout=()=>{
        let path = "/";
        props.history.push(path);
    }

    return(
        <div className="Login">
            <Router>
            <ToastContainer/>
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-2">Welcome to the Customer Page</h1>
                    <Button color = "warning" onClick={()=>{
                        handleHome();
                    }}>Home</Button>
                    <Button color = "danger" onClick={()=>{
                        handleLogout();
                        toast("Logged Out!!")
                    }}>Logout</Button>
                </CardBody>
            </Card>
                <Container>
                    <Row>
                        <Col md={4}>
                            <CustomerMenu/>
                        </Col>
                        <Col md={8}>
                        <Switch>
                            <Route path="/add-customer" component={AddCustomer} exact/>
                            </Switch>
                            <Switch>
                            <Route path="/view-history" component={Customerhistory} exact/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}
export default customerPage;