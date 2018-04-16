import React, {Component} from 'react'



import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Button} from 'mdbreact'


import 'tachyons'
import {Card, CardBody, CardImage, CardTitle, CardText, Input} from 'mdbreact';
import {View, Mask} from 'mdbreact';
import './Home.css'
import Maintenance from "./Maintenance";
import Tires from "./Tires";
import Body from "./Body";
import {
    Route,
    Switch,
} from 'react-router-dom'






class Home extends Component {
    render() {
        return ( <div>

                    <Card>
                    <View>

                    <CardImage className="img-fluid" src="https://www.look.com.ua/large/201312/86370.jpg"/>
                    <Mask className="flex-center">
                        <div className="col-md-6">
                    <p className="white-text">Book your next maintenance, body work, tire change</p>
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