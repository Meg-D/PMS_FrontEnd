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

const Deletemedicine = (props) => {

    const [medicines,setmedicines]=useState([]);
    const [medicine,setmedicine]=useState({});
    const [id,setId] = useState('');



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

    const deleteMedicine=(id)=>{
            axios.put(`${base_url}/medicine/delete/${id}`).then(
                (response)=>{
                    toast.success("Medicine deleted");
                    getAllmedicine();
                },
                (error)=>{
                    toast.error("Can't delete medicine , server problem");
                }
            )
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
                            setId(obj.medicine_id)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        medicines.length > 0 ? medicines.map((item) => <option>{item.name}</option>) : "No medicine"
                    }
                </Input>
            </FormGroup>
            <Button color="danger" onClick={()=>{
                                    deleteMedicine(medicine.medicine_id);
                                }}>Delete</Button>
            <hr/>
        </Form>

    );
}

export default Deletemedicine;