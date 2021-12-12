import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import medicineMenu from "./MedicineMenu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllMedicines from "./AllMedicines";
import AddMedicines from "./AddMedicines";
import DeleteMedicines from "./DeleteMedicines";
import UpdateMedicines from "./UpdateMedicines";
import MedicineMenu from "./MedicineMenu";

const medicinePage=(props)=>{

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
                    <h1 className="text-center my-2">Welcome to the Medicine Page</h1>
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
                            <MedicineMenu/>
                        </Col>
                        <Col md={8}>
                            <Switch>
                            <Route path="/view-medicine" component={AllMedicines } exact/>
                            <Route path="/add-medicine" component={AddMedicines} exact/>
                            <Route path="/delete-medicine" component={DeleteMedicines} exact/>
                            <Route path="/update-medicine" component={UpdateMedicines} exact/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default medicinePage;