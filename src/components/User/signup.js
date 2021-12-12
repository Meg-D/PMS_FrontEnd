import React, { Component } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import base_url from "../../api/bootapi";

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
                                toast("Login Successful");

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
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="username" className="form-control" placeholder="User Name" onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="number" name="number" className="form-control" placeholder="Phone Number" onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="address" className="form-control" placeholder="Address" onChange= {this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        );
    }
}