import React from "react";
import {Container, Row} from "react-bootstrap"
import ItemList from "./itemList/itemList";

import "./itemListContainer.css"

function ItemListContainer({greeting}){


    let list = [
        {
            productId:"#9A58B",
            name:"Leather Gloves",
            size:"M",
            color:"Dark Brown",
            stock:5
        },
        {
            productId:"#5EY56",
            name:"Leather Pants",
            size:"S",
            color:"black",
            stock:3
        },
        {
            productId:"#YT346",
            name:"T-shit",
            size:"L",
            color:"white",
            stock:8
        },
        {
            productId:"#589YI",
            name:"Jacket",
            size:"L",
            color:"Dark Blue",
            stock:2
        },
        {
            productId:"#YR1R8",
            name:"Socks",
            size:"S",
            color:"white",
            stock:10
        }
    ];

    return(
        <Container>
            <Row>
                <h3 className="item-greeting">{greeting}</h3>
                <ItemList list={list}/>
            </Row>
        </Container>
    )
}

export default ItemListContainer