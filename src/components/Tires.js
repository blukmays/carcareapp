import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'

const MyListGroup = (props) => {
    return(
        <ListGroup>
            <ListGroupItem href="#" active>Big O Tires</ListGroupItem>
            <ListGroupItem href="#" hover>Les Schwab Tire Center</ListGroupItem>
            <ListGroupItem href="#" hover>Discount Tire</ListGroupItem>
            <ListGroupItem href="#" hover>Tire World</ListGroupItem>
            <ListGroupItem href="#" disabled>Diamond Tires</ListGroupItem>
        </ListGroup>
    );
};

export default MyListGroup;
