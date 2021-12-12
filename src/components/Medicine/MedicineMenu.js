import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const medicinemenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-medicine">Show all medicines</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-medicine">Add a medicine</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/delete-medicine">Delete medicine</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/update-medicine">Update medicine</Link>
        </ListGroup>

    );
}

export default medicinemenu;