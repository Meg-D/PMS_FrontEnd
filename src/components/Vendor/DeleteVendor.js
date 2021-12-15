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

const Deletevendor = (props) => {

    const [vendors,setvendors]=useState([]);
    const [vendor,setvendor]=useState({});
    const [id,setId] = useState('');



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

    const deletevendor=(id)=>{
            axios.delete(`${base_url}/vendor/delete/${id}`).then(
                (response)=>{
                    toast.success("Vendor Deleted",{
                        position: "bottom-center",
                    });
                    getAllvendor();
                },
                (error)=>{
                    toast.error("Can't delete vendor , Try Again !!");
                }
            )
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
                            setId(obj.vendor_id)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        vendors.length > 0 ? vendors.map((item) => <option>{item.name}</option>) : "No vendor"
                    }
                </Input>
            </FormGroup>
            <Button color="danger" onClick={()=>{
                                    deletevendor(vendor.vendor_id);
                                }}>Delete</Button>
            <hr/>
        </Form>

    );
}

export default Deletevendor;