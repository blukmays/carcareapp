import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact'
import axios from 'axios';

//
//
// https://www.yelp.com/developers/graphql/query/search
//
//

class Maintenance extends Component {

    state = {

        results: []

    }

    componentDidMount() {

        axios.get(`http://localhost:8080/api/maintenance`).then(res => {

            const results = res.data.search.business;

            console.log(results);

            this.setState({ results });

        })

    }

    render() {
        return (
            <div>
                <ListGroup>

                    {this.state.results.map(result => (


                        <ListGroupItem href="#" hover>

                            <h1>{result.name}</h1>

                            <p>

                                {result.location.address1}<br />{result.location.city}, {result.location.state} <br />

                            </p>

                        </ListGroupItem>


                    ))}

                </ListGroup>

            </div>
        )
    }
}

export default Maintenance;


