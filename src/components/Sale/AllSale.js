import Sale from './Sale';
import { Row,Col,Container } from 'reactstrap';

const AllSale=(props)=>{
    return (
        <div>
             <Container fluid>
                 <Row>
                    {
                        sales.length > 0
                            ? sales.map((item) => 
                            <Col sm="2">
                                <Sale sale={item} user={user_id} customer={cust_id}/>
                            </Col>
                            )
                            : "No Sales"
                    }
                  </Row> 
            </Container>  
        </div>

    );
}
export default AllSale;