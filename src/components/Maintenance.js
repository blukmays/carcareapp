import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact'

class Maintenance extends Component {
    render () {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem href="#" hover><h1>Red Rock Auto Repair</h1>
                        <p>
                        2334 S Main St
                        Salt Lake City, UT 84115
                        City of South Salt Lake</p>
                    </ListGroupItem>
                    <ListGroupItem href="#" hover><h1>Autograff Motor Works</h1>
                    <p1>
                        50 West 700 S
                        Salt Lake City, UT 84101
                        Downtown, Peoples Freeway, Salt Lake City</p1>
                    </ListGroupItem>
                    <ListGroupItem href="#" hover><h1>The Automotive Back Shop</h1><p1>3105 W 3500th S
                        Salt Lake City, UT 84119</p1>
                    </ListGroupItem>
                    <ListGroupItem href="#" hover><h1>Jones Complete Car Care</h1>
                        <p1>4621 S 900th E
                            Salt Lake City, UT 84117</p1>
                    </ListGroupItem>

                </ListGroup>




            </div>
        )
    }
}

export default Maintenance;


