import React from 'react';
import Fetch from 'node-fetch';

export default class extends React.Component {
    state={
        name: ""
    }


    componentDidMount () {

        const API = 'EyE_VkmnJa03vH17M8hKyAfL4n0xcvKpsfPJaKB_b1ZSFMwIIAIPqAheCp_6_7ACExxv7PhLVqonP0EW3psVNoeu-XtAUWRw8jvAkQemzB8e21PBiOkOxwUDQgrZWnYx'

        const options = {
            headers: {'Authorization': `Bearer ${API}`}
        }
        Fetch(`https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw`, options)
            .then (res => res.json()).then (json=> this.setState({name:json.name}))




}

render () {
        return (
            <div>
                {console.log (this.state.name)}
            </div>
        )
}

}

