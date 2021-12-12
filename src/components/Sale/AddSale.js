import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal,List
} from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { ListGroup, ListGroupItem } from 'reactstrap';
import base_url from '../../api/bootapi';

const AddSale = (props) => {

    const [medicines,setmedicines]=useState([]);
    const [medicine,setmedicine]=useState({});
    const [selectedList,setList]=useState([]);
    const [newobj,setnewobj] = useState([]);
    const [phoneNumber,setphone] = useState('');
    const [sale,setsale] = useState({});
    const [saleId,setsaleid] = useState('');
    const [item,setitem] = useState({});
    const user = localStorage.getItem('userid');
    const saleid = localStorage.getItem('saleid');
        const saveBill = () =>{
                    axios.put(`${base_url}/sale/update/${saleid}`).then(
                                                    (response)=>{
                                                        console.log(response.data);
                                                        toast("Data Saved Successfully !!");
                                                        console.log(response.data.amount);
                                                        alert("Total Amount : "+ response.data.amount);
                                                    },
                                                    (error)=>{
                                                        toast("Data can't be saved !!");
                                                        console.log(error);
                                                    }
                                                );
                            }

        const saveItem = () =>{
            axios.post(`${base_url}/item/add`,item).then(
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

        const getAllmedicine=()=>{
            axios.get(`${base_url}/medicine/getAll`).then(
                (response)=>{
                    console.log(response.data);
                    setmedicines(response.data);
                    console.log(medicines)
                    setsale({...sale,user_id:user})
                },
                (error)=>{
                    console.log(error);
                }
            );
        }

        const createSale=()=>{
                    axios.post(`${base_url}/sale/add`,sale).then(
                                                    (response)=>{
                                                        console.log(response.data);
                                                        toast("Data Saved Successfully !!");
                                                        localStorage.setItem("saleid",response.data.sale_id)
                                                        setitem({...item,sale_id:localStorage.getItem('saleid')})
                                                    },
                                                    (error)=>{
                                                        toast("Data can't be saved !!");
                                                        console.log(error);
                                                    }
                                                );
                }

        const getCustomerByPhone=()=>{
                    axios.get(`${base_url}/customer/getCustomer/${phoneNumber}`).then(
                        (response)=>{
                            console.log(response.data);
                            setsale({...sale,cust_id:response.data.customer_id})
                            console.log(sale);
                        },
                        (error)=>{
                            console.log(error);
                        }
                    );

        /*            axios.post(`http://localhost:8888/sale/add`,sale).then(
                                (response)=>{
                                    console.log(response.data);
                                    toast("Data Saved Successfully !!");
                                    setsaleid(response.data.sale_id);
                                    setitem({...item,sale_id:saleId})
                                },
                                (error)=>{
                                    toast("Data can't be saved !!");
                                    console.log(error);
                                }
                            );*/

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
                                    <Label for="examplequant">Enter Customer Phone Number :</Label>
                                    <Input type="double" name="quantity" id="exampleQuant" onChange={(e) => {
                                        setphone(e.target.value)
                                    }}/>
                                </FormGroup>
        <Button type="reset" onClick={()=>{
                                            console.log(medicine);
                                            getCustomerByPhone();
                                        }}>Get Customer</Button>
        <Button type="reset" onClick={()=>{
                                    console.log(medicine);
                                    createSale();
                                }}>Create Sale</Button>

            <hr/>
            <FormGroup>
                <Label for="exampleResource">Select Medicine</Label>
                <Input type="select" name="select" id="equipmentResource" onChange={(e) => {
                    const medicineName = e.target.value;
                    const id = medicineName.split(" ")[0];
                    for(var i=0;i<medicines.length;i++){
                        var obj = medicines[i];
                        if(obj.medicine_id == id){
                            setmedicine(obj)
                            newobj.push(obj);
                            setList({...selectedList,newobj});
                            setitem({...item,med_id:id})

                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        medicines.length > 0 ? medicines.map((item) => <option>{item.medicine_id+" - Medicine name - "+item.name+", Price - "+item.cost}</option>) : "No Luxury resources"
                    }
                </Input>
            </FormGroup>
            <FormGroup>
                            <Label for="examplequant">Quantity</Label>
                            <Input type="number" name="quantity" id="exampleQuant" onChange={(e) => {
                                setitem({...item, quantity : e.target.value})
                            }}/>
                        </FormGroup>
            <FormGroup>
                            <Label for="examplequant">Discount</Label>
                            <Input type="double" name="quantity" id="exampleQuant" onChange={(e) => {
                                setitem({...item, discount : e.target.value})
                            }}/>
                        </FormGroup>
            <Button type="reset" onClick={()=>{
                            console.log(medicine);
                            saveItem();
                        }}>Add</Button>
            <hr/>
            <Label for="exampleEquipment">Selected Medicines</Label>
            <div>
            <ul class="list-group">
                {
                    newobj.length > 0 ? newobj.map((item) => <li class="list-group-item li">{"Medicine Name - "+item.name+", Cost - "+item.cost} </li>) : "No Medicines"
                }
            </ul>
            </div>
            <Button type="reset" onClick={()=>{
                                        console.log(medicine);
                                        saveBill();
                                    }}>Generate Bill</Button>
        </Form>

    );
}

export default AddSale;