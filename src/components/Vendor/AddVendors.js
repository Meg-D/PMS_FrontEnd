import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import base_url from '../../api/bootapi';

const Addvendor = (props) => {
    const[vendor,setvendor] = useState({});

    const savevendor = () =>{
        axios.post(`${base_url}/vendor/add`,vendor).then(
            (response)=>{
                console.log(response.data);
                toast("Data Saved Successfully !!");
            },
            (error)=>{
                toast("Data can't be saved !!");
                console.log(error);
            }
        );
    }

    return (
        <Form>
            <FormGroup>
                <Label for="examplevendor">Vendor Name</Label>
                <Input type="text" name="vendor" id="examplvendor" onChange={(e) => {
                    setvendor({...vendor, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplequant">Location</Label>
                <Input type="text" name="quantity" id="exampleQuant" onChange={(e) => {
                    setvendor({...vendor, location : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                 <Label for="exampleCost">Email</Label>
                 <Input type="text" name="cost" id="exampleCost" onChange={(e) => {
                    setvendor({...vendor, email : e.target.value})
                          }}/>
            </FormGroup>
            <FormGroup>
                             <Label for="exampleCost">Phone</Label>
                             <Input type="number" name="cost" id="exampleCost" onChange={(e) => {
                                setvendor({...vendor, phone : e.target.value})
                                      }}/>
                        </FormGroup>
            <Button color="primary" onClick={()=>{
                console.log(vendor);
                savevendor();
            }}>Submit</Button>
        </Form>
    );
}

export default Addvendor;