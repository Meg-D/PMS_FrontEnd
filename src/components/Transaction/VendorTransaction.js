import { useState,useEffect } from "react"
import axios from "axios";
import { Form, FormGroup,Label,Input,Button } from "reactstrap";
import base_url from "../../api/bootapi";
import { Row,Col,Container } from 'reactstrap';
import Transaction from "./Transaction";
const Vendortransaction=(props)=>{
    const [transactions,setTransactions] = useState([]);
    const [transaction,setTransaction] = useState([]);
    const[vendors,setvendors] = useState([]);
    const[id,setid]=useState('');


    const getAllTransactions=(id)=>{
        axios.get(`${base_url}/transaction/getbyvendorid/${id}`).then(
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
    const getAllvendor=()=>{
        axios.get(`${base_url}/vendor/getall`).then(
            (response)=>{
                console.log(response.data);
                setvendors(response.data);
                console.log(vendors)
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    useEffect(()=>{
        getAllvendor();
    },[]);

    return(
        <Form>
              <FormGroup>
                                        <Label for="examplevendor">Select Vendor</Label>
                                        <Input type="select" name="select" id="vendorSelect" onChange={(e) => {
                                            const vendorName = e.target.value;
                                            for(var i=0;i<vendors.length;i++){
                                                var obj = vendors[i];
                                                if(obj.name == vendorName){
                                                    setid(obj.vendor_id)
                                                }
                                            }


                                        }}>
                                            <option>[Select one]</option>
                                            {
                                                vendors.length > 0 ? vendors.map((item) => <option>{item.name}</option>) : "No Vendors"
                                            }
                                        </Input>
                                    </FormGroup>
                                    <Container fluid>
                 <Row>
                    {
                        transactions.length > 0
                            ? transactions.map((item) => 
                            <Col sm="2">
                                <Transaction user={item.user_id} transaction={item} medicine={item.med_id} vendor={item.ven_id}/>
                            </Col>
                            )
                            : "No transactions"
                    }
                  </Row> 
            </Container>  
            <Button type="reset" onClick={()=>{
                console.log(id);
                getAllTransactions(id);
            }}>Submit</Button>
        </Form>
    );
}
export default Vendortransaction;