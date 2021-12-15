
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import Menus from "../Home/Menus";
import { useEffect } from "react";
import SalePage from '../Sale/SalePage';
import medicinePage from "../Medicine/MedicinePage";
import customerPage from "../Customer/CustomerPage";
import vendorPage from "../Vendor/VendorPage";
import RequestPage from "../Request/RequestPage";
import TransactionPage from "../Transaction/TransactionPage";
import UserPage from "../User/UserPage";
import MyProfile from "../User/MyProfile";

const Master=(props)=>{

    // function refreshPage() {
    //     window.location.reload(false);
    //   }

    const handleHome=()=>{
        let path = "/master";
        props.history.push(path);
    }

    const handleLogout=()=>{
        let path = "/";
        props.history.push(path);
    }
    return(
        <div>
<div className="Login">
            <Router>
            <ToastContainer/>

            <Container style={{ marginTop: '2%'},{background: 'linear-gradient(#81c9e6, #ffffff)'}}>
            <Card className="my-5" style={{backgroundColor: '#bbd6e2'}} >
                <CardBody style={{marginBottom : '0.5%', marginTop: '2%',paddingBottom:'0.5%'}} >
                    <h1   className="text-center my-4">Pharmacy Management System</h1>
                    {/* <Button style = {{marginRight: '5%'}} color = "warning" onClick={()=>{
                        handleHome();
                    }}>Home</Button> */}

                    <Button style = {{float:'right',marginRight:'5%',paddingBottom:'0.5%'}} color = "danger" onClick={()=>{
                        handleLogout();
                        toast("Logged Out!!")
                    }}>Logout</Button> 
                </CardBody>
            
            </Card>

{/* <div class=" text-3xl font-medium text-pink-500 text-opacity-150 ...">Pharmacy Management System</div> */}

                {/* <Container className="top"> */}
                    <Row style={{ marginTop: '5%'}}>
                        <Col md={2}>
                            <Menus/> 
                        </Col>
                        
                        <Col md={10}>
                          <Switch>
                            <Route path="/my-profile" component={MyProfile} exact/>
                            <Route path="/medicine" component={medicinePage} exact/>
                            <Route path="/Customer" component={customerPage} exact/>
                            <Route path="/sale" component={SalePage} exact/>
                            <Route path="/vendor" component={vendorPage} exact/>
                            <Route path="/request" component={RequestPage} exact/>
                            <Route path="/transaction" component={TransactionPage} exact/>
                            <Route path="/" component={UserPage} exact/>
                          </Switch>
                        </Col>
                    </Row>
                {/* </Container> */}
                </Container>
            </Router>
        </div>
        </div>
    );
}
export default Master;