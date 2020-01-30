/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react'
import { Row, Col, Button, Divider, Cascader, Input } from "antd"
import SignupForm from '../components/form/Signup.components.form'

class Signup extends Component {


    render() {
        return (
            <Row>
                <Col span={4} />
                <Col span={16}>
                    <h1>Signup</h1>
                    <br />
                    <SignupForm />
                </Col>
            </Row>
        )
    }
}

export default Signup