const Request=({request, user})=>{
    return(
        <div>
            <li>{request.medicine_name}</li>
            <li>{request.quantity}</li>
            <li>{request.order_date}</li>
            <li>{user.username}</li>
        </div>
    )
}
export default Request;