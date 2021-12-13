import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";

import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import ShowVendor from "./ShowVendor";
import AddVendors from "./AddVendors";
import DeleteVendor from "./DeleteVendor";
import UpdateVendor from "./UpdateVendor";
import VendorMenu from "./VendorMenu";

const vendorPage=(props)=>{

    // const handleHome=()=>{
    //     let path = "/menu";
    //     props.history.push(path);
    // }

    return(
        <div className="Login">
            <Router>
            <ToastContainer/>
            {/* <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-2">Vendors</h1>
                    <Button color = "primary" onClick={()=>{
                        handleHome();
                    }}>Home</Button>
                </CardBody>
            </Card> */}
                <Container>
                    <Row>
                        <Col md={3}>
                            <VendorMenu/>
                        </Col>
                        <Col md={8}>
<Switch>
                            <Route path="/view-vendor" component={ShowVendor } exact/>
                            <Route path="/add-vendor" component={AddVendors} exact/>
                            <Route path="/delete-vendor" component={DeleteVendor} exact/>
                            <Route path="/update-vendor" component={UpdateVendor} exact/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default vendorPage;