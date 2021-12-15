import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import { Row,Col,Container } from 'reactstrap';
import axios from "axios";
import base_url from '../../api/bootapi';
import Transaction from './Transaction';

const Showtransaction = (props) => {

    const [transactions,setTransactions]=useState({});
    const [transaction,setTransaction]=useState([]);
    const [user,setUser]=useState([]);
    const [vendor,setVendor] = useState([]);
    const [medicine,setMedicine] = useState([]);


    const getAllTransaction=()=>{
        axios.get(`${base_url}/transaction/getall`).then(
            (response)=>{
                console.log(response.data);
                setTransactions(response.data);
                console.log(transactions);
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllTransaction();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
             <Container fluid>
                 <Row>
                    {
                        transactions.length > 0
                            ? transactions.map((item) => 
                            <Col sm="6">
                                <Transaction user={item.user_id} transaction={item} medicine={item.med_id} vendor={item.ven_id}/>
                                <br/>
                            </Col>
                            )
                            : "No transactions"
                    }
                  </Row> 
            </Container>  
            <hr/>
        </div>

    );
}

export default Showtransaction;