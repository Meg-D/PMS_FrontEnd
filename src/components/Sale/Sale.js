import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Label } from 'reactstrap';

const Sale=({sale, customer, user})=>{
    return(
        
            <Card style={{width:"100%"}, {borderRadius : '1rem'}}>
        <CardBody className="text-center">
            <CardTitle className="font-weight-bold"><b>Amount: {sale.amount}</b></CardTitle>
            <CardText> Profit/Loss : {sale.net_diff}</CardText>
            <CardText> Sold to : {customer.name}</CardText>
            <CardText> Type of Customer : {customer.type}</CardText>
            <CardText> Date : {sale.date}</CardText>
            <CardText> Sold by : {user.username}</CardText>
        </CardBody>
    </Card>
    )
}

export default Sale;