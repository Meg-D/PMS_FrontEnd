import { useEffect, useState } from "react"
import axios from "axios";
import { Form } from "reactstrap";
import base_url from "../../api/bootapi";
import { Row,Col,Container } from 'reactstrap';
import Sale from "./Sale";

const Usersale=(props)=>{
    const [sales,setSales] = useState([]);
    const [transaction,setTransaction] = useState([]);
    var id = localStorage.getItem('userid');


    const getAllSales=(id)=>{
        axios.get(`${base_url}/sale/getByUser/${id}`).then(
            (response)=>{
                console.log(response.data);
                setSales(response.data);
                console.log(sales);
            },
            (error)=>{
                console.log(error);
            }
        );
    }
    useEffect(()=>{
        getAllSales(id);
    },[]);
    return(
        <Form>
            <Container fluid>
                 <Row>
                    {
                        sales.length > 0
                            ? sales.map((item) => 
                            <Col sm="6">
                                <Sale sale={item} user={item.user_id} customer={item.cust_id}/>
                                <br/>
                            </Col>
                            )
                            : "No sales"
                    }
                  </Row> 
            </Container>  
            <hr/>
        </Form>
    );
}
export default Usersale;