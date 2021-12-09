import React, {useState} from "react";



import "./item.css"

function Item (product){

    const [amount, setAmount] = useState(1)

    const onAdd = (()=>{
        setAmount(amount+1)
    })

    const onRemove = (()=>{
        setAmount(amount-1)
    })

    return(
        <div className="product-item">
            <h4>{product.product.name}</h4>
            <div className="product-details">
                <h5>Product info:</h5>
                <div>
                    <p>Size: {product.product.size}</p>
                    <p>Color: {product.product.color}</p>
                    <p>Stock avaliable: {product.product.stock}</p>
                </div>
                <div>
                    {amount <= 1 ? <button className="unactive-button" >-</button> : <button className="active-button" onClick={onRemove}>-</button>}
                    <p>{amount}</p>
                    {amount >= product.product.stock ? <button className="unactive-button" >+</button> : <button className="active-button" onClick={onAdd}>+</button> }
                </div>
            </div>
        </div>
    )
}

export default Item