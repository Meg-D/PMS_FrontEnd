import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";
import base_url from '../../api/bootapi';
import { Row,Col,Container } from 'reactstrap';
import Vendor from './Vendor';

const Showvendor = (props) => {

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


    useEffect(()=>{
        getAllvendor();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        // <Form>
        //      <FormGroup>
        //         <Label for="examplevendor">Select vendor</Label>
        //         <Input type="select" name="select" id="vendorSelect" onChange={(e) => {
        //             const vendorName = e.target.value;
        //             for(var i=0;i<vendors.length;i++){
        //                 var obj = vendors[i];
        //                 if(obj.name == vendorName){
        //                     setvendor(obj)
        //                 }
        //             }


        //         }}>
        //             <option>[Select one]</option>
        //             {
        //                 vendors.length > 0 ? vendors.map((item) => <option>{item.name}</option>) : "No vendor"
        //             }
        //         </Input>
        //     </FormGroup>
        //     <Button color="primary" onClick={toggle}>Show Details</Button>
        //     <Modal isOpen={modal} toggle={toggle} className={className}>
        //         <ModalHeader toggle={toggle}>vendor Details :</ModalHeader>
        //         <ModalBody>
        //             vendor Name : {vendor.name}<br/>
        //             Location : {vendor.location}<br/>
        //             Email : {vendor.email}<br/>
        //             Phone : {vendor.phone}<br/>
        //         </ModalBody>
        //         <ModalFooter>
        //             <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
        //         </ModalFooter>
        //     </Modal> 
        //     <hr/>
        // </Form>
<div>
<Container fluid>
                 <Row>
                    {
                        vendors.length > 0
                            ? vendors.map((item) => 
                            <Col sm="6">
                                <Vendor vendor={item}/>
                                <br/>
                            </Col>
                            )
                            : "No vendors"
                    }
                  </Row> 
            </Container>  
            <hr/>
</div>
    );
}

export default Showvendor;