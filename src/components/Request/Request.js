import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Label } from 'reactstrap';

const Request=({request, user})=>{
    return(    
         <Card style={{width:"100%"}, {borderRadius : '1rem'}}>
         <CardBody className="text-center">
             <CardTitle className="font-weight-bold"><b>Medicine name : {request.medicine_name}</b></CardTitle>
             <CardText> Quantity : {request.quantity}</CardText>
             <CardText> Ordered on : {request.order_date}</CardText>
             <CardText> Ordered By : {user.username}</CardText>
         </CardBody>
     </Card>
    )
}
export default Request;