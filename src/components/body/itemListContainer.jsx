import React from "react";
import {Container, Row} from "react-bootstrap"

import "./itemListContainer.css"

function ItemListContainer({greeting}){
    return(
        <Container>
            <Row>
                <h3 className="item-list">{greeting}</h3>
            </Row>
        </Container>
    )
}

export default ItemListContainer