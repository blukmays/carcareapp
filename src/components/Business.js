import React from 'react';


export default class Business extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        const businessId = this.props.match.params.businessId;
        fetch(`/${businessId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer EyE_VkmnJa03vH17M8hKyAfL4n0xcvKpsfPJaKB_b1ZSFMwIIAIPqAheCp_6_7ACExxv7PhLVqonP0EW3psVNoeu-XtAUWRw8jvAkQemzB8e21PBiOkOxwUDQgrZWnYx"
            }
        })
            .then(res => res.json())
            .then(business => this.setState({business}))
    }

    render() {
        console.log('proppssssss', this.props.match.params.businessId);
        console.log('businesssss', this.state.business);
        const selectedBusiness = this.state.business;
        return (
            <div>
                {selectedBusiness ?
                    (
                        <div>
                            <div>{selectedBusiness.name}</div> <br/>
                            <div>
                                <img alt='' src={selectedBusiness.image_url} width="400px" height="400px" />
                            </div> <br/>
                            <div>Address</div><div>{selectedBusiness.location.address1}, {selectedBusiness.location.city}, {selectedBusiness.location.state}, {selectedBusiness.location.country}</div> <br/>
                            <div>Rating</div><div>{selectedBusiness.rating} </div> <br/>
                            <div>Reviews</div><div>{selectedBusiness.review_count}</div> <br/>
                            <div>Phone</div><div>{selectedBusiness.phone}</div> <br/>
                        </div>
                    )
                    :
                    ''
                }
            </div>
        )
    }
}