import React from "react"
// This is inline styling for currency, in this case dollars: toLocaleString("en-US", { style: "currency", currency: "USD" })
function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
    )
}

export default Product