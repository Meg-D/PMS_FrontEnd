import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import base_url from '../../api/bootapi';

const Addmedicine = (props) => {
    const[medicine,setmedicine] = useState({});

    const savemedicine = () =>{
        axios.post(`${base_url}/medicine/add`,medicine).then(
            (response)=>{
                console.log(response.data);
                toast.success("Medicine Added !!",{
                    position: "bottom-center",
                });
            },
            (error)=>{
                toast.error("Medicine cannot be added, Try Again !!");
                console.log(error);
            }
        );
    }

    return (
        <Form>
            <FormGroup>
                <Label for="examplemedicine">Medicine Name</Label>
                <Input type="text" name="medicine" id="examplmedicine" onChange={(e) => {
                    setmedicine({...medicine, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplequant">Quantity</Label>
                <Input type="number" name="quantity" id="exampleQuant" onChange={(e) => {
                    setmedicine({...medicine, quantity_left : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                 <Label for="exampleCost">Cost</Label>
                 <Input type="double" name="cost" id="exampleCost" onChange={(e) => {
                    setmedicine({...medicine, cost : e.target.value})
                          }}/>
            </FormGroup>
            <Button color="primary" onClick={()=>{
                console.log(medicine);
                savemedicine();
            }}>Submit</Button>
             <hr/>
        </Form>
    );
}

export default Addmedicine;