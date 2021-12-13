import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Label } from 'reactstrap';

const Medicine=({medicine})=>{
    return(
        <Card style={{width:"100%"}, {borderRadius : '1rem'}}>
        <CardBody className="text-center">
            <CardTitle className="font-weight-bold"><b>Name : {medicine.name}</b></CardTitle>
            <CardText> Quantity : {medicine.quantity_left}</CardText>
            <CardText> Cost : {medicine.cost}</CardText>
        </CardBody>
    </Card>
    )
}
export default Medicine;