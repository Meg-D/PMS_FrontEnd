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
import Request from './Request';

const ShowRequest = (props) => {

    const [requests,setrequests]=useState([]);
    const [request,setrequest]=useState({});
    const [user,setUser]=useState([]);
    const [vendor,setVendor]=useState([]);
    const [user2,setUser2] = useState([]);

    const getAllrequests=()=>{
        axios.get(`${base_url}/request/getall`).then(
            (response)=>{
                console.log(response.data);
                setrequests(response.data);
                console.log(requests);
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllrequests();
    },[]);

    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        // <Form>
        //     <FormGroup>
        //         <Label for="examplerequest">Select Request</Label>
        //         <Input type="select" name="select" id="requestSelect" onChange={(e) => {
        //             const requestName = e.target.value;
        //             for(var i=0;i<requests.length;i++){
        //                 var obj = requests[i];
        //                 if(obj.medicine_name == requestName){
        //                     setrequest(obj)
        //                     console.log(request);
        //                     setUser(obj.placed_by);
        //                     setUser2(obj.accepted_by);
        //                     setVendor(obj.vendor_id);
        //                 }
        //             }


        //         }}>
        //             <option>[Select one]</option>
        //             {
        //                 requests.length > 0 ? requests.map((item) => <option>{item.medicine_name}</option>) : "No request"
        //             }
        //         </Input>
        //     </FormGroup>
        //     <Button color="primary" onClick={toggle}>Show Details</Button>
        //     <Modal isOpen={modal} toggle={toggle} className={className}>
        //         <ModalHeader toggle={toggle}>Request Details :</ModalHeader>
        //         <ModalBody>
        //             Medicine Name : {request.medicine_name}<br/>
        //             Quantity : {request.quantity}<br/>
        //             Status : {request.status}<br/>
        //             Order Date : {request.order_date}<br/>
        //             Placed by : {user.username}<br/>
        //             {/* Delivery Date : {request.delivery_date}<br/>
        //             Accepted by : {user2.username}<br/>
        //             Vendor : {vendor.name}<br/> */}
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
                   requests.length > 0
                       ? requests.map((item) => 
                       <Col sm="2">
                           <Request request={item} user={item.placed_by} />
                       </Col>
                       )
                       : "No Requests"
               }
             </Row> 
       </Container>  
   </div>
    );
}

export default ShowRequest;