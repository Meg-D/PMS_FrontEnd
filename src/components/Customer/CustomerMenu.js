import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom";

const customerMenu=()=>{
    return(
        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-customer">Add Customer</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-history">View History</Link>
        </ListGroup>
    );
}
export default customerMenu;