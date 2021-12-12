import AddSale from "./AddSale";
import Usersale from "./UserSale";
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Salemenu from "./SaleMenu";

const SalePage=(props)=>{
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
                    <h1 className="text-center my-2">Welcome to the Sale Page</h1>
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
                            <Salemenu/>
                        </Col>
                        <Col md={8}>
                        <Switch>
                            <Route path="/add-sale" component={AddSale} exact/>
                            <Route path='/view-my-sales' component={Usersale} exact/>
                            </Switch>

                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}
export default SalePage;