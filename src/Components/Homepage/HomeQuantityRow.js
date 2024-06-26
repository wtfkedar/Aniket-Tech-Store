import '../../CSS/HomePage.css'


function QuantityRow(phones, laptops, appliances, egames) {
    return (
        <div className="row main-title-quantity-row">
            <div className="col main-title-quantity-column">
                <h5 className="main-title-quantity"> {phones} </h5> 
                <h6 className="main-title-quantity"> Phones </h6> 
            </div>
            <div className="col main-title-quantity-column">
                <h5 className="main-title-quantity"> {laptops} </h5> 
                <h6 className="main-title-quantity"> Laptops </h6> 
            </div>
            <div className="col main-title-quantity-column">
                <h5 className="main-title-quantity"> {appliances} </h5> 
                <h6 className="main-title-quantity"> Home Appliances</h6> 
            </div>
            <div className="col main-title-quantity-column">
                <h5 className="main-title-quantity"> {egames} </h5> 
                <h6 className="main-title-quantity"> E-Games </h6> 
            </div>
        </div>
    )
}

export default QuantityRow;