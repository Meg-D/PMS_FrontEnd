import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, List
} from 'reactstrap';
import { Modal} from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { ListGroup, ListGroupItem } from 'reactstrap';
import base_url from '../../api/bootapi';
import {Row,Col} from 'reactstrap';

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
    const [bill,setBill]=useState();
        const saveBill = () =>{
                    axios.put(`${base_url}/sale/update/${saleid}`).then(
                                                    (response)=>{
                                                        console.log(response.data);
                                                        // toast.success("Sale Made !!",{
                                                        //     position: "bottom-center",
                                                        // });
                                                        console.log(response.data.amount);
                                                        
                                                        //alert("Total Amount : "+ response.data.amount);
                                                        setBill(response.data.amount);
                                                        console.log(bill);
                                                        setnewobj([]);
                                                    },
                                                    (error)=>{
                                                        toast("Sale could not be made, Try Again !!");
                                                        console.log(error);
                                                    }
                                                );
                            }

        const saveItem = () =>{
            axios.post(`${base_url}/item/add`,item).then(
                                            (response)=>{
                                                console.log(response.data);
                                                toast.success("Item Added !!",{
                                                    position: "bottom-center",
                                                });
                                                
                                            },
                                            (error)=>{
                                                toast.error("Item could not be added, Try Again !!");
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
                                                        toast.success("Sale created !!",{
                                                            position: "bottom-center",
                                                        });
                                                        localStorage.setItem("saleid",response.data.sale_id)
                                                        setitem({...item,sale_id:localStorage.getItem('saleid')})
                                                    },
                                                    (error)=>{
                                                        toast.error("Sale could not be created, check Customer details and then Try Again !!");
                                                        console.log(error);
                                                    }
                                                );
                }

        const getCustomerByPhone=()=>{
                    axios.get(`${base_url}/customer/getCustomer/${phoneNumber}`).then(
                        (response)=>{
                            console.log(response.data);
                            toast.success("Customer Fetched!!",{
                                position: "bottom-center",
                            })
                            setsale({...sale,cust_id:response.data.customer_id})
                            console.log(sale);
                        },
                        (error)=>{
                            console.log(error);
                            toast.error("Customer could not be fetched, make sure that Customer already Exists and then Try Again!!")
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
        // const {
        //     className
        // } = props;

        // const [modal, setModal] = useState(false);

        // const toggle = () => setModal(!modal);
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      

    return (
        <Form>
        <FormGroup>
            <Label for="examplequant" style={{align:'left'}}>Enter Customer Phone Number :</Label>
            <Row>
                <Col md='9'>
                    <Input type="number" name="quantity" id="exampleQuant" onChange={(e) => {
                                        setphone(e.target.value)
                                    }}/>
                </Col>
                <Col md='3'>
                    <Button color="primary" onClick={()=>{
                                            console.log(medicine);
                                            getCustomerByPhone();
                                        }}>Get Customer</Button>
                </Col>
            </Row>
        </FormGroup>
        <hr/>
            
        <Button style={{width:'50%'}} color='warning' onClick={()=>{
                                    console.log(medicine);
                                    createSale();
                                }}>Create Sale</Button>

            
        <FormGroup style={{marginTop:'4%'}}>
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
                        medicines.length > 0 ? medicines.map((item) => <option>{item.medicine_id +" "+ item.name+", Price - "+item.cost+", Quantity - "+item.quantity_left}</option>) : "No Medicines"
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
            <Button style={{width:'20%'}} type="reset" onClick={()=>{
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
            <Button style={{marginTop:'4%', width:'30%'}} color="success" onClick={()=>{
                                        console.log(medicine);
                                        saveBill();
                                        handleShow();
                                    }}>Generate Bill</Button>
                                    {/* <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle}> Bill </ModalHeader>
                                                        <ModalBody> Total Amount : {bill} </ModalBody> 
                                                        <ModalFooter>
                                                            <Button color='danger' onClick={function noRefCheck(){}}> Close </Button>
                                                        </ModalFooter>
                                                    </Modal> */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>Total Amount : {bill}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
                                    <hr/>





{/* 
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> 
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}


        </Form>

    );
}

export default AddSale;