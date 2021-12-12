import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import base_url from "../../api/bootapi";

const Addtransaction = (props) => {
    const user = localStorage.getItem('userid');
    const[transaction,settransaction] = useState({user_id:user});
    const[vendors,setvendors] = useState([]);
    const[vendor,setvendor] = useState([]);
    


    const savetransaction = () =>{
        axios.post(`${base_url}/transaction/add`,transaction).then(
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

    const getAllvendor=()=>{
            axios.get(`${base_url}/vendor/getall`).then(
                (response)=>{
                    console.log(response.data);
                    setvendors(response.data);
                    console.log(vendors)
                },
                (error)=>{
                    console.log(error);
                }
            );
        }


    useEffect(()=>{
        getAllvendor();
    },[]);

    return (
        <Form>
            <FormGroup>
                <Label for="examplerequest">Medicine Name</Label>
                <Input type="text" name="medicine_name"
                id="exampleName" onChange={(e) => {
                    settransaction({...transaction, medicine_name : e.target.value})
                }}/>
            </FormGroup>

            <FormGroup>
                <Label for="examplequant">Quantity</Label>
                <Input type="number" name="quantity" id="exampleQuant" onChange={(e) => {
                    settransaction({...transaction, quantity : e.target.value})
                }}/>
            </FormGroup>

            <FormGroup>
                            <Label for="examplequant">Price</Label>
                            <Input type="double" name="quantity" id="exampleQuant" onChange={(e) => {
                                settransaction({...transaction, price : e.target.value})
                            }}/>
                        </FormGroup>

            <FormGroup>
                                        <Label for="examplevendor">Select Vendor</Label>
                                        <Input type="select" name="select" id="vendorSelect" onChange={(e) => {
                                            const vendorName = e.target.value;
                                            for(var i=0;i<vendors.length;i++){
                                                var obj = vendors[i];
                                                if(obj.name == vendorName){
                                                    setvendor(obj)
                                                    settransaction({...transaction,vendor_id : obj.vendor_id})
                                                   
                                                }
                                            }


                                        }}>
                                            <option>[Select one]</option>
                                            {
                                                vendors.length > 0 ? vendors.map((item) => <option>{item.name}</option>) : "No Vendors"
                                            }
                                        </Input>
                                    </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(transaction);
                savetransaction();
            }}>Submit</Button>
        </Form>
    );
}

export default Addtransaction;
