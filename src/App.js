import './App.css';
import {Col, Row} from "reactstrap";
import { BrowserRouter as Router, Switch, Route,Routes, Link} from "react-router-dom";
import medicinePage from './components/Medicine/MedicinePage';
import vendorPage from './components/Vendor/VendorPage';
import UserPage from './components/User/UserPage';
import RequestPage from './components/Request/RequestPage';
import transactionPage from './components/Transaction/TransactionPage';
import Home from './components/Home/Home'
import Login from './components/User/login';
import SignUp from './components/User/signup';
import Menus from './components/Home/Menus';
import customerPage from './components/Customer/CustomerPage';
import MyProfile from './components/User/MyProfile';
import SalePage from './components/Sale/SalePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={UserPage}/>
            <Route exact path="/home" component={Home}/>
            
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/sign-up'} component={SignUp}/>
            <Route path={'/menu'} component={Menus}/>
            <Route path={'/Customer'} component={customerPage}/>
            <Route path={'/my-profile'} component={MyProfile}/>
            
            <Route path={'/Sale'} component={SalePage}/>
            <Route path={'/Medicine'} component={medicinePage}/>
            <Route path={'/Request'} component={RequestPage}/>
            <Route path={'/User'} component={UserPage}/>
            <Route path={'/Vendor'} component={vendorPage}/>
            <Route path={'/Transaction'} component={transactionPage}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
