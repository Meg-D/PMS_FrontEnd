import React, { Component } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import base_url from "../../api/bootapi";
import UserPage from "./UserPage";
import {Link} from "react-router-dom";
import reactRouterDom from "react-router-dom";


export default class SignUp extends Component {

    state = {username:'',
             password:'',
             phone:'',
             address:''};

    handleSubmit = event => {
            event.preventDefault();
            const user = {
              username: this.state.username,
              password: this.state.password,
              phone: this.state.phone,
              address: this.state.address
            };
            console.log(user);
            axios.post(`${base_url}/user/add`,user).then(
                        (response) => {
                            if(response.data!=""){
                                console.log("Match");
                                toast("Sign-Up Successful");

                            }
                            else{
                                toast("Invalid Username or Password")
                            }
                            console.log(response.data.username);
                            console.log("success");
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
            console.log(this.state.password);
            console.log(this.state.phone);
            console.log(this.state.address);
           // console.log(name);
          }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <UserPage/>
                <div className="auth-wrapper" style={{ marginTop: '7%'}}>
                    <div className="auth-inner">
                <h3>Sign Up</h3> 

                <div className="form-group" style={{marginTop:'5%'}}>
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" onChange= {this.handleChange} required="required"/>
                </div>

                <div className="form-group" style={{marginTop:'5%'}}>
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" onChange= {this.handleChange} required="required"/>
                </div>

                <div className="form-group" style={{marginTop:'5%'}}>
                    <label>Phone</label>
                    <input type="text" name="number" className="form-control" onChange= {this.handleChange} required="required"/>
                </div>

                <div className="form-group" style={{marginTop:'5%'}}>
                    <label>Password</label>

                    <input type="password" name="password" className="form-control" onChange= {this.handleChange} required="required"/>
                </div>

                <Button type="submit" style={{marginTop:'7%'}}>Sign Up</Button>
                {/* <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p> */}
               
                <p className="forgot-password text-right">
                Already registered?
                <Link tag="a" to="/login"> Sign in!</Link>
                </p>
                </div>
                </div>
            </form>
        );
    }
}