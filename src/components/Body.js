import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'

const MyListGroup = (props) => {
    return(
        <ListGroup>
            <ListGroupItem href="#" hover>Schneider Auto Karosserie and Paint</ListGroupItem>
            <ListGroupItem href="#" hover>Everest Collision Repair</ListGroupItem>
            <ListGroupItem href="#" hover>Wasatch Body Repair</ListGroupItem>
            <ListGroupItem href="#" hover>Rick Warner Body Shop</ListGroupItem>
            <ListGroupItem href="#" disabled>Valet Auto Body</ListGroupItem>
        </ListGroup>
    );
};

export default MyListGroup;