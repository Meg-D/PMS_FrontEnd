import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const vendormenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-vendor">Show all vendors</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-vendor">Add a vendor</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/delete-vendor">Delete vendor</Link>
            {/* <Link className="list-group-item list-group-item-action" tag="a" to="/update-vendor">Update vendor</Link> */}
        </ListGroup>

    );
}

export default vendormenu;