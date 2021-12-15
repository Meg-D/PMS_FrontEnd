import axios from "axios";
import React, { useState } from "react";
import { Form,Label,Input,Button } from "reactstrap";
import { FormGroup } from "reactstrap";
import base_url from "../../api/bootapi";
import { Row,Col,Container } from 'reactstrap';
import Sale
 from "../Sale/Sale";
const Customerhistory=(props)=>{
    const [sales,setSales] = useState([]);
    const[phone,setPhone]=useState('');

    const getAllSales=(phone)=>{
        axios.get(`${base_url}/sale/getByCustomer/${phone}`).then(
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


    return(
        <Form>
            <FormGroup>
                <Label for="customer">Phone Number</Label>
                <Input type="Number" name="phone" id="customerPhone" onChange={(e)=>{
                   setPhone(e.target.value);
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(phone);
                getAllSales(phone);
            }}>Submit</Button>
            
            <Container fluid style={{marginTop:'3%'}}>
                 <Row>
                    {
                        sales.length > 0
                            ? sales.map((item) => 
                            <Col sm="6">
                                <Sale sale={item} user={item.user_id} customer={item.cust_id}/>
                                <br/>
                            </Col>
                            )
                            : "No Sales"
                    }
                  </Row> 
            </Container>  
            <hr/>
        </Form>
    );
}
export default Customerhistory;