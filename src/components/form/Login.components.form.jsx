import React, { PureComponent } from 'react'
import { Form, Button, Input } from 'antd'
// import Input from "./DecoratedInput"
import { Link } from 'react-router-dom'
import { formItemLayout } from '../../styles/maintheme.styles'
import { connect } from 'react-redux'

class LoginForm extends PureComponent {

    handleSubmit = (e) => {
        const { form, login } = this.props
        e.preventDefault()
        form.validateFields((err, values) => {
            if (!err) {
                login(values)
            }
        })
    }


    render() {
        const { form } = this.props
        const { getFieldDecorator } = form
        return <Form {...formItemLayout} onSubmit={this.handleSubmit}>

            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please enter your email' }],
                })(<Input placeholder="joe@company.com" />)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please enter your password' }],
                })(<Input.Password type="password" placeholder="Password" />)}
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>

            <Link to="/signup">Signup</Link>
        </Form>
    }
}
const WrappedLoginForm = Form.create({ name: 'login_' })(LoginForm)
const mapDispatch = {
    login: (payload) => ({ type: 'LOGIN', payload })
}
export default connect(null, mapDispatch)(WrappedLoginForm)