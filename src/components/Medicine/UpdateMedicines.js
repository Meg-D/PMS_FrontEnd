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

const Updatemedicine = (props) => {

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

    const updateMedicine = () =>{
            axios.put(`${base_url}/medicine/update`,medicine).then(
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
        getAllmedicine();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
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
            <FormGroup>
                            <Label for="examplemedicine">Medicine Name</Label>
                            <Input type="text" name="medicine" id="examplmedicine" value={medicine.name} onChange={(e) => {
                                setmedicine({...medicine, name : e.target.value})

                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplequant">Quantity</Label>
                            <Input type="number" name="quantity" id="exampleQuant" value={medicine.quantity_left} onChange={(e) => {
                                setmedicine({...medicine, quantity_left : e.target.value})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                             <Label for="exampleCost">Cost</Label>
                             <Input type="double" name="cost" id="exampleCost" value={medicine.cost} onChange={(e) => {
                                setmedicine({...medicine, cost : e.target.value})
                                      }}/>
                        </FormGroup>
                        <Button type="reset" onClick={()=>{
                            console.log(medicine);
                            updateMedicine();
                        }}>Submit</Button>
            <hr/>
        </Form>

    );
}

export default Updatemedicine;