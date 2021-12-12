import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";
import {toast} from "react-toastify";
import base_url from '../../api/bootapi';

const Updatevendor = (props) => {

    const [vendors,setvendors]=useState([]);
    const [vendor,setvendor]=useState([]);



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

    const updatevendor = () =>{
            axios.put(`${base_url}/vendor/update`,vendor).then(
                (response)=>{
                    console.log(response.data);
                    toast("Data Updated Successfully !!");
                },
                (error)=>{
                    toast("Data can't be saved !!");
                    console.log(error);
                }
            );
        }


    useEffect(()=>{
        getAllvendor();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="examplevendor">Select vendor</Label>
                <Input type="select" name="select" id="vendorSelect" onChange={(e) => {
                    const vendorName = e.target.value;
                    for(var i=0;i<vendors.length;i++){
                        var obj = vendors[i];
                        if(obj.name == vendorName){
                            setvendor(obj)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        vendors.length > 0 ? vendors.map((item) => <option>{item.name}</option>) : "No vendor"
                    }
                </Input>
            </FormGroup>
            <FormGroup>
                            <Label for="examplevendor">Vendor Name</Label>
                            <Input type="text" name="vendor" id="examplvendor" value={vendor.name} onChange={(e) => {
                                setvendor({...vendor, name : e.target.value})

                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplequant">Location</Label>
                            <Input type="text" name="quantity" id="exampleQuant" value={vendor.location} onChange={(e) => {
                                setvendor({...vendor, location : e.target.value})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                                                    <Label for="examplequant">Email</Label>
                                                    <Input type="text" name="quantity" id="exampleQuant" value={vendor.email} onChange={(e) => {
                                                        setvendor({...vendor, email : e.target.value})
                                                    }}/>
                                                </FormGroup>
                        <FormGroup>
                                                    <Label for="examplequant">Phone</Label>
                                                    <Input type="text" name="quantity" id="exampleQuant" value={vendor.phone} onChange={(e) => {
                                                        setvendor({...vendor, phone : e.target.value})
                                                    }}/>
                                                </FormGroup>

                        <Button type="reset" onClick={()=>{
                            console.log(vendor);
                            updatevendor();
                        }}>Submit</Button>
            <hr/>
        </Form>

    );
}

export default Updatevendor;