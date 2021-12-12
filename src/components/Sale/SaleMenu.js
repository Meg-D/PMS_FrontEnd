import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const Salemenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-sale">Add Sale</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-my-sales">View My Sales</Link>

        </ListGroup>

    );
}

export default Salemenu;