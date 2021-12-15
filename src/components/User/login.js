import React, { Component,Redirect } from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import ReactSession from 'react-client-session';
import base_url from '../../api/bootapi';



export default class Login extends Component {

    state = {username:'',
             password:''};

    state = {user:''};



    handleSubmit = event => {
        event.preventDefault();
        const user = JSON.stringify({
          username: this.state.username,
          password: this.state.password
        });
        console.log(user);
        axios.get(`${base_url}/user/login/${user}`).then(
                    (response) => {
                        if(response.data!=""){
                            console.log(response.data);
                            console.log("Match");
                            toast("Login Successful");
                            localStorage.setItem("userid",response.data.user_id);
                            localStorage.setItem("username",response.data.username);
                            localStorage.setItem("address",response.data.address);
                            localStorage.setItem("phone",response.data.phone);
                            localStorage.setItem("password",response.data.password  );
                            window.location.href = '/master';
                            // console.log(response.data);
                        //    localStorage.setItem('userid',response.data.id);
                          //  return <Link to={{ pathname:'/add-transaction',state:response.data.id}}</Link>
                          // return <Redirect to = '/medicine-page'/>

                        }
                        else{
                            toast("Invalid Username or Password")
                        }
                        console.log(response.data.username);
                        console.log("success");
                       // ReactSession.setStoreType("localStorage");
                       // ReactSession.set("username", response.data.username);

                    },
                    (error) => {
                        console.log(error);
                        console.log("error");
                    }
                );

      }
    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value});
        console.log(this.state.username);
       // console.log(name);
      }



    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className="auth-wrapper" style={{ marginTop: '7%'}}>
                    <div className="auth-inner">
                <h3>Sign In</h3>

                <div className="form-group" style={{marginTop:'5%'}}>
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter username" onChange= {this.handleChange}/>
                </div>

                <div className="form-group" style={{marginTop:'5%'}}>
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange= {this.handleChange}/>
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <Button type="submit" style={{marginTop:'7%'}}>Submit</Button>
                {/* <p className="forgot-password text-right">
                    New User <a href="/sign-up">sign up?</a>
                </p> */}
</div>
                </div>
            </form>
        );
    }
}