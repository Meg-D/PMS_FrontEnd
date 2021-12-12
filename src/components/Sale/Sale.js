const Sale=({sale, customer, user})=>{
    return(
        <div>
            <ul>
                <li>{sale.amount}</li>
                <li>{sale.net_diff}</li>
                <li>{customer.name}</li>
                <li>{user.username}</li>
            </ul>
        </div>
    )
}

export default Sale;