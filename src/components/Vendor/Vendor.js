import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Label } from 'reactstrap';
const Vendor=({vendor})=>{
    return(
            <Card style={{width:"100%"}, {borderRadius : '1rem'}}>
         <CardBody className="text-center">
             <CardTitle className="font-weight-bold"><b>Name :  {vendor.name}</b></CardTitle>
             <CardText> Phone : {vendor.phone}</CardText>
             <CardText> Location : {vendor.location}</CardText>
             <CardText> Email : {vendor.email}</CardText>
             <CardText> Start Date : {vendor.start_date}</CardText>
         </CardBody>
     </Card>
       
    )
}
export default Vendor;