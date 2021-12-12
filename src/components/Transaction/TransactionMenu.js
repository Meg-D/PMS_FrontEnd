import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const transactionmenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-transaction">View Transactions</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-transaction">Add Transaction</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-my-transactions">View my Transactions</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-vendor-transactions">View Vendor Transactions</Link>

        </ListGroup>

    );
}

export default transactionmenu;