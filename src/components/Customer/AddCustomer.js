import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormGroup, Input, Label,Button } from "reactstrap";
import base_url from "../../api/bootapi";

const AddCustomer = (props) => {
    const[customer,setCustomer] = useState([]);

    const addCustomer=()=>{
        axios.post(`${base_url}/customer/add`,customer).then(
            (response)=>{
                console.log(response.data);
                toast.success("Customer Added Successfully !!",{
                    position: "bottom-center",
                });
            },
            (error)=>{
                toast.error("Customer cannot be added, Try Again !!");
                console.log(error);
            }  
        );
    }
    
    return (
       
        <div>
            <FormGroup>
                <Label for="customer">Name</Label>
                <Input type="text" name="name" id="customername" onChange={(e)=>{
                    setCustomer({...customer,name:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="customer">Phone Number</Label>
                <Input type="Number" name="phone" id="customerPhone" onChange={(e)=>{
                    setCustomer({...customer,phone:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="customer">Type</Label>
                <Input type='select' name="type" id="customerType" onChange={(e)=>{
                    setCustomer({...customer,type:e.target.value})
                }}>
    <option>[Select one]</option>
                    <option>1</option>
                    <option>2</option>
                    </Input>
            </FormGroup>
            <Button color="primary" onClick={()=>{
                console.log(customer);
                addCustomer();
            }}>Submit</Button>
            <hr/>
        </div>
    );
}
export default AddCustomer;