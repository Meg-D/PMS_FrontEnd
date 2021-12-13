import { useEffect, useState } from "react"
import axios from "axios";
import { Form } from "reactstrap";
import base_url from "../../api/bootapi";
import { Row,Col,Container } from 'reactstrap';
import Transaction from "./Transaction";
const Usertransaction=(props)=>{
    const [transactions,setTransactions] = useState([]);
    const [transaction,setTransaction] = useState([]);
    var id = localStorage.getItem('userid');


    const getAllTransactions=(id)=>{
        axios.get(`${base_url}/transaction/getbyuserid/${id}`).then(
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
        getAllTransactions(id);
    },[]);
    return(
        <Form>
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
        </Form>
    );
}
export default Usertransaction;