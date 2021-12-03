import React from "react";
import {Container, Row} from "react-bootstrap"

import "./itemListContainer.css"

function ItemListContainer(){
    return(
        <Container>
            <Row>
                <ul className="item-list">
                    <li>Aca</li>
                    <li>iria</li>
                    <li>la</li>
                    <li>lista</li>
                    <li>de</li>
                    <li>items</li>
                </ul>
            </Row>
        </Container>
    )
}

export default ItemListContainer