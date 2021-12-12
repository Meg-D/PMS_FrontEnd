import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import RequestMenu from "./RequestMenu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShowRequest from './ShowRequest';
import AddRequest from "./AddRequest";
import UpdateRequest from './UpdateRequest';


const RequestPage=(props)=>{

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
                    <h1 className="text-center my-2">Welcome to the Request Page</h1>
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
                            <RequestMenu/>
                        </Col>
                        <Col md={8}>
                        <Switch>
                            <Route path="/view-request" component={ShowRequest } exact/>
                            <Route path="/add-request" component={AddRequest} exact/>

                            <Route path="/update-request" component={UpdateRequest} exact/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default RequestPage;