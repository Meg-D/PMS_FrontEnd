import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const requestmenu=(props)=>{
    return(
        <div>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-request">View Pending Requests</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-request">Add Request</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/update-request">Update Pending Request</Link>
        </ListGroup>
        </div>
    );
}

export default requestmenu;