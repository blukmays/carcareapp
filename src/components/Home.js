import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Button} from 'mdbreact'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'tachyons'
import {Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';
import {View, Mask} from 'mdbreact';
import API from '../api';



class Home extends Component {
    constructor() {
        super();

        this.state = {
            selectedOption: '',
        }

        this.fetchBusinesses = this.fetchBusinesses.bind(this)
    }

    handleChange = (selectedOption) => {
        if (selectedOption) {
            //this.setState({ selectedOption });
            console.log(`Selected: ${JSON.stringify(selectedOption)}`);
            window.location.href = `/businesses/${selectedOption.id}`;
            //return <Redirect to={`/businesses/${selectedOption.id}`} />
        } else {
            this.setState({selectedOption: null})
        }
    }

    fetchBusinesses(category) {
        const location = this.location.value;
        fetch(`/search?categories=${category}&location=${location}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer EyE_VkmnJa03vH17M8hKyAfL4n0xcvKpsfPJaKB_b1ZSFMwIIAIPqAheCp_6_7ACExxv7PhLVqonP0EW3psVNoeu-XtAUWRw8jvAkQemzB8e21PBiOkOxwUDQgrZWnYx"
            }
        })
            .then(res => res.json())
            .then(response => this.setState({businesses: response.businesses}))
    }

    login() {
        this.props.auth.login();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return ( <div>

                <API/>

                {
                    isAuthenticated() && (
                        <h4>
                            You are logged in!
                        </h4>
                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </a>
                            {' '}to continue.
                        </h4>
                    )
                }

                    <Card>
                    <View>


                        <CardImage className="img-fluid" src="https://www.look.com.ua/large/201312/86370.jpg">

                        </CardImage>
                    <Mask className="flex-center">
                        <div className="col-md-6">
                            <p className="white-text">Book your next maintenance, body work, tire change</p>


                            <div className="row center">
                                <div className="col-sm-4">
                                    <input name="location" placeholder="Enter your Location..." ref={i => this.location = i} />
                                </div>

                                <div className="col-sm-4">
                                    <Select
                                        name="form-field-name"
                                        value={this.state.selectedOption}
                                        onInputChange={this.fetchBusinesses}
                                        onChange={this.handleChange}
                                        labelKey={'name'}
                                        valueKey={'id'}
                                        options={this.state.businesses}
                                    />
                                </div>
                            </div>




                        </div>

                    </Mask>

                    </View>

                    <CardBody>
                    <CardTitle></CardTitle>
                    <CardText>

                    </CardText>


                    </CardBody>
                    </Card>

                <div className="box1">
                    <div className="container">
                    <div className="row">


                    <div className="col">
                    <Card narrow>
                    <CardImage className="img-fluid"
                    src="http://franksautorepairwaltham.com/wp-content/uploads/2016/04/routine-car-maintenance-newton-ma.png"/>
                    <CardBody>
                    <CardTitle>Routine Maintenance</CardTitle>
                    <CardText>Make appointments with ease for a routine maintenance and more </CardText>
                    <Button href="/maintenance">Find Mechanics</Button>
                    </CardBody>
                    </Card>
                    </div>

                    <div className="col">
                    <Card narrow>
                    <CardImage className="img-fluid"
                    src="http://kingsdtowing.com/wp-content/uploads/2018/03/image_06.jpg"/>
                    <CardBody>
                    <CardTitle>Tires</CardTitle>
                    <CardText>Make appointments with ease for tire services and more</CardText>
                    <Button href="/tires">Find Tire Shop</Button>
                    </CardBody>
                    </Card>
                    </div>

                    <div className="col">
                    <Card narrow>
                    <CardImage className="img-fluid"
                    src="http://www.citycollisioncenter.net/wp-content/uploads/2017/04/featured_collision_services.jpg"/>
                    <CardBody>
                    <CardTitle>Body Repair</CardTitle>
                    <CardText>Make appointments with ease for body repairs and more </CardText>
                    <Button href="/body">Find Body Shop</Button>
                    </CardBody>
                    </Card>
                    </div>
                    </div>
                    </div>




                </div>



            </div>

        )
    }
}

export default Home;