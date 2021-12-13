import React from "react";
import {useState,useEffect} from "react";
import base_url from "../../api/bootapi";
import { ReactComponent as Mail } from "../../images/mail.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from 'reactstrap';

const MyProfile = (props) => {
  const handleHome=()=>{
    let path = "/menu";
    props.history.push(path);
}

    const [user,setUser] = useState({});
    const [userid,setuserid] = useState(localStorage.getItem('userid'));
    const [pass,setPass] = useState({username:localStorage.getItem('username')});



    const saveUser = () =>{
            axios.post(`${base_url}/user/updatePassword`,pass).then(
                (response)=>{
                    console.log(response.data);
                    toast(response.data);
                },
                (error)=>{
                    toast("Error !!");
                    console.log(error);
                }
            );
        }

  return (
      <div>
        <div class="container">
          <div class="col-lg-12 col-lg-offset-4 col-md-12 mt-3 col-md-offset-4 col-sm-16 col-xs-16 edit_information">
            <form action="">	
              {/* <h3 class="text-center m-4 pt-10">Edit Personal Information</h3> */}
              {/* <Button color = "primary" onClick={()=>{
                        handleHome();
                    }}>Home</Button> */}
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-14">
                  <div class="form-group">
                    <label class="profile_details_text">Name:</label>
                    <input type="text" readOnly = {true} name="name" class="form-control" value={localStorage.getItem('username')} required onChange={(e) => {
                            setUser({...user, name : e.target.value})
                            
                             }} />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Address:</label>
                    <input type="address" readOnly = {true} name="address" class="form-control" value={localStorage.getItem('address')} required onChange={(e) => {
                             setUser({...user, address : e.target.value})
                                    }}/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Mobile Number:</label>
                    <input type="tel" readOnly = {true} name="phone" class="form-control" value={localStorage.getItem('phone')} onChange={(e) => {
                    setUser({...user, phone : e.target.value})
                     }}/>
                    
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Old password:</label>
                    <input type="password" name="password" class="form-control"  required onChange={(e) => {
                        setPass({...pass, old : e.target.value})
                                }}/>
                  </div>
                </div>
              </div>
              <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group">
                                  <label class="profile_details_text">New password:</label>
                                  <input type="password" name="password" class="form-control" required onChange={(e) => {
                                      setPass({...pass, newp : e.target.value})
                                              }}/>
                                </div>
                              </div>
                            </div>
              <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group">
                                  <label class="profile_details_text">Confirm password:</label>
                                  <input type="password" name="password" class="form-control"  required onChange={(e) => {
                                      setPass({...pass, newp2 : e.target.value})
                                              }}/>
                                </div>
                              </div>
                            </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                  <div class="form-group">
                    <Button type="reset" onClick={()=>{
                console.log(pass);
                saveUser();
            }}>Submit</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default MyProfile;
