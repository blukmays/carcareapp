import React, { Component, } from 'react'
import {Input,Button} from 'mdbreact';



class Signup extends Component {
    render() {
        return (
            <div>
                <h2 className="mb-5">Form register</h2>
                <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                    <div className="text-center">
                        <Button color="deep-orange">Sign up</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;
