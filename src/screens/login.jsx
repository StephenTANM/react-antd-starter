/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import { Row, Col, } from "antd"
import LoginForm from "../components/form/Login.components.form"
class Login extends React.Component {
    state = {

    }
    RenderField = (field) => {
        return null
    }
    render() {
        return (
            <Row>
                <Col span={4} />
                <Col span={16}>
                    <h1>Login</h1>
                    <br />
                    <LoginForm></LoginForm>
                </Col>
            </Row>
        )
    }
}

export default Login