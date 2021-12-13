import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Label } from 'reactstrap';

const Transaction=({transaction, user, medicine, vendor })=>{
    return(
        
         
            <Card style={{width:"100%"}, {borderRadius : '1rem'}}>
         <CardBody className="text-center">
             <CardTitle className="font-weight-bold"><b>Medicine name : {medicine.name}</b></CardTitle>
             <CardText> Quantity Purchased : {transaction.quantity}</CardText>
             <CardText> Price : {transaction.price}</CardText>
             <CardText> Order Date : {transaction.date_of_purchase}</CardText>
             <CardText> Recieved By : {user.username}</CardText>
             <CardText> Sold By : {vendor.name}</CardText>
             
         </CardBody>
       </Card>
    )

}

export default Transaction;