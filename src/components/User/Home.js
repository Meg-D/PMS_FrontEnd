import { Route, Switch } from "react-router-dom"
import UserPage from "./UserPage"
import { Row } from "reactstrap";
import Login from "./login";
import SignUp from "./signup";

const Home=(props)=>{
    return(
        <div>
            <Row>
                <UserPage/>
                
            </Row>
            <Row>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
              </Switch>
            </Row>
        </div>
    )
}
export default Home;