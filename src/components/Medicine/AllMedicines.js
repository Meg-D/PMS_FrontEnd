import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal, Row
} from 'reactstrap';
import axios from "axios";
import base_url from '../../api/bootapi';
import { Col,Container } from 'reactstrap';
import Medicine from './Medicine';

const Showmedicine = (props) => {

    const [medicines,setmedicines]=useState([]);
    const [medicine,setmedicine]=useState([]);

    const getAllmedicine=()=>{
        axios.get(`${base_url}/medicine/getAll`).then(
            (response)=>{
                console.log(response.data);
                setmedicines(response.data);
                console.log(medicines)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllmedicine();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            {/* <FormGroup>
                <Label for="examplemedicine">Select medicine</Label>
                <Input type="select" name="select" id="medicineSelect" onChange={(e) => {
                    const medicineName = e.target.value;
                    for(var i=0;i<medicines.length;i++){
                        var obj = medicines[i];
                        if(obj.name == medicineName){
                            setmedicine(obj)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        medicines.length > 0 ? medicines.map((item) => <option>{item.name}</option>) : "No medicine"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button> */}
            {/* <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>medicine Details :</ModalHeader>
                <ModalBody>
                    Medicine Name : {medicine.name}<br/>
                    Quantity Left : {medicine.quantity_left}<br/>
                    Cost : {medicine.cost}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal> */}
            <Container fluid>
                 <Row>
                    {
                        medicines.length > 0
                            ? medicines.map((item) => 
                            <Col sm="6">
                                <Medicine medicine={item}/>
                                <br/>
                            </Col>
                            )
                            : "No medicines"
                    }
                  </Row> 
            </Container>  
            <hr/>
        </Form>

    );
}

export default Showmedicine;