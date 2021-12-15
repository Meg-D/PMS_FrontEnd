import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import TransactionMenu from "./TransactionMenu";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
//import AllMedicines from "./AllMedicines";
import AddTransaction from "./AddTransaction";
import Usertransaction from './UserTransaction';
import Vendortransaction from './VendorTransaction';
import ViewTransaction from './ViewTransaction'
//import DeleteMedicines from "./DeleteMedicines";
//import UpdateMedicines from "./UpdateMedicines";


const TransactionPage=(props)=>{

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
                    <h1 className="text-center my-2">Transactions</h1>
                    <Button color = "primary" onClick={()=>{
                        handleHome();
                    }}>Home</Button>
                </CardBody>
            </Card> */}
                <Container>
                    <Row>
                        <Col md={3}>
                            <TransactionMenu/>
                        </Col>
                        <Col md={8}>
                        <Switch>
                            <Route path="/view-transaction" component={ViewTransaction} exact/>
                            <Route path="/add-transaction" component={AddTransaction} exact/>
                            <Route path='/view-my-transactions' component={Usertransaction} exact/>
                            <Route path='/view-vendor-transactions' component={Vendortransaction} exact/>
                            </Switch>

                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default TransactionPage;