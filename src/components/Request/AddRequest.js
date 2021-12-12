import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import base_url from '../../api/bootapi';

const AddRequest = (props) => {
    const[requests,setrequests] = useState([]);
    
    const user = localStorage.getItem('userid');
    const[request,setrequest] = useState({placed_by : user});

    const saverequest = () =>{
        axios.post(`${base_url}/request/add`,request).then(
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
                <Label for="examplerequest">Medicine Name</Label>
                <Input type="text" name="medicine_name"
                id="exampleName" onChange={(e) => {
                    setrequest({...request, medicine_name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplequant">Quantity</Label>
                <Input type="number" name="quantity" id="exampleQuant" onChange={(e) => {
                    setrequest({...request, quantity : e.target.value})
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(request);
                saverequest();
            }}>Submit</Button>
        </Form>
    );
}

export default AddRequest;
