const Vendor=({vendor})=>{
    return(
        <div>
            <ul>
                <li>
                    {vendor.name}
                </li>
                <li>
                    {vendor.phone}
                </li>
                <li>
                    {vendor.location}
                </li>
                <li>{vendor.email}</li>
            </ul>
        </div>
    )
}
export default Vendor;