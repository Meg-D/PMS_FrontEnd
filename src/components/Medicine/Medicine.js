const Medicine=({medicine})=>{
    return(
        <div>
            <ul>
                <li>{medicine.name}</li>
                <li>{medicine.quantity_left}</li>
                <li>{medicine.cost}</li>
            </ul>
        </div>
    )
}
export default Medicine;