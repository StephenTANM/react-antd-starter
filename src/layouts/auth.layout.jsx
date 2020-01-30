import React, { Component } from 'react'
import { Row, Col } from 'antd';
export default class AuthLayout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="layout-container">
                <Row>
                    <Col span={12}>
                        <div className="p-5">
                            {children}
                        </div>
                    </Col>
                    <Col span={12} className="auth-banner p-4">
                        {
                            window.location.pathname === '/login' ? <h2>Login</h2> : <h2>Signup</h2>
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
