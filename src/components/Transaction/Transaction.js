
const Transaction=({transaction, user, medicine, vendor })=>{
    return(
        <div>
            <ul>
                <li>{transaction.quantity}</li>
                <li>{transaction.price}</li>
               <li>{user.username}</li>
               <li>{vendor.name}</li>
               <li>{medicine.name}</li>
            </ul>
        </div>
    )

}

export default Transaction;