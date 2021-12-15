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

const UpdateRequest = (props) => {

    const [requests,setrequests]=useState([]);
    const user = localStorage.getItem('userid');
    const[request,setrequest] = useState({accepted_by : user});
    const [vendors,setVendors]=useState([]);

    const getAllVendor=()=>{
        axios.get(`${base_url}/vendor/getall`).then(
            (response)=>{
                console.log(response.data);
                setVendors(response.data);
                console.log(vendors)
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    const getAllrequest=()=>{
        axios.get(`${base_url}/request/getall`).then(
            (response)=>{
                console.log(response.data);
                setrequests(response.data);
                console.log(requests)
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    const updaterequest = () =>{
            axios.put(`${base_url}/request/update`,request).then(
                (response)=>{
                    console.log(response.data);
                    toast.success("Request Updated!!",{
                        position: "bottom-center",
                    });
                },
                (error)=>{
                    toast("Request could not be Updated, Try Again !!");
                    console.log(error);
                }
            );
        }


    useEffect(()=>{
        getAllrequest();
        getAllVendor();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="examplerequest">Select request</Label>
                <Input type="select" name="select" id="requestSelect" onChange={(e) => {
                    const requestName = e.target.value;
                    for(var i=0;i<requests.length;i++){
                        var obj = requests[i];
                        if(obj.medicine_name == requestName){
                            setrequest({...request, request_id : obj.request_id});
                        }
                    }
                }}>
                    <option>[Select one]</option>
                    {
                        requests.length > 0 ? requests.map((item) => <option>{item.medicine_name}</option>) : "No request"
                    }
                </Input>
            </FormGroup>
            <FormGroup>
                 <Label for="exampleprice">Price</Label>
                 <Input type="double" name="cost" id="exampleCost" onChange={(e) => {
                    setrequest({...request, price : e.target.value})
                          }}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplerequest">Select Vendor</Label>
                <Input type="select" name="select" id="vendorSelect" onChange={(e) => {
                    const vendorName = e.target.value;
                    for(var i=0;i<vendors.length;i++){
                        var obj = vendors[i];
                        if(obj.name == vendorName){
                            setrequest({...request, vendor_id : obj.vendor_id});
                        }
                    }
                }}>
                    <option>[Select one]</option>
                    {
                        vendors.length > 0 ? vendors.map((item) => <option>{item.name}</option>) : "No vendor"
                    }
                </Input>
            </FormGroup>
                        <Button color='success' onClick={()=>{
                            console.log(request);
                            updaterequest();
                            getAllrequest();
                        }}>Submit</Button>
            <hr/>
        </Form>

    );
}

export default UpdateRequest;