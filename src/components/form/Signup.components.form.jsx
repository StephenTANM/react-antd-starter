import React, { PureComponent } from 'react'
import { Form, Button, Input, Cascader } from "antd"
// import Input from "./DecoratedInput"
import { Link } from "react-router-dom"
import { formItemLayout } from '../../styles/maintheme.styles'
import validator from "validator"
import { connect } from 'react-redux'

class SignupForm extends PureComponent {

    state = {
        website: ''
    }

    handleSubmit = (e) => {
        const { form, signup } = this.props
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                signup(values)
            }
        })
    }

    formatWebsite = e => {
        const { form } = this.props
        const website = e.target.value.split('').filter(
            char => char !== ' '
        ).join('')
        return website
    }

    validatePhone = (rule, value, callback) => {
        console.log(value)
        if (!validator.isMobilePhone(value) && value.length > 0) {
            callback("Phone is invalid");
        } else callback()

    }

    formatPhone = e => {
        const { form } = this.props
        const isL = form.getFieldValue('phone').length < e.target.value.length
        let number
        number = e.target.value.split('')
        if (e.target.value.length === 1 && isL) {
            number[1] = number[0]
            number[0] = '('
        }
        if (e.target.value.length === 4 && isL) {
            number[4] = ')'
            number[5] = ' '
        }
        if (e.target.value.length === 9 && isL) {
            number[9] = '-'
        }
        number = number.join('')
        return number
    }

    render() {
        const { form } = this.props
        const { website } = this.state
        const { getFieldDecorator } = form
        return <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter your full name' }],
                })(<Input placeholder="Joe Dirte" />)}
            </Form.Item>
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
                {getFieldDecorator('business_name', {
                    rules: [{ required: true, message: 'Please enter your business name' }],
                })(<Input placeholder="Business name" />)}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('industry', {
                    rules: [{ required: true, message: 'Please enter your industry' }],
                })(<Input placeholder="Industry/Category" />)}
            </Form.Item>
            <Form.Item >
                {getFieldDecorator('website', {
                    getValueFromEvent: this.formatWebsite
                })(<Input addonBefore="https://" addonAfter=".com" placeholder="domain" />)}
            </Form.Item>
            <Form.Item >
                {getFieldDecorator('phone', {
                    initialValue: '',
                    getValueFromEvent: this.formatPhone,
                    rules: [
                        {
                            validator: this.validatePhone
                        }
                    ]
                })(<Input addonBefore="+1" placeholder="Phone" maxLength={14} />)}
            </Form.Item>

            {/* <Divider orientation="left">Address</Divider>
                        <Row gutter={12}>
                            <Col span={12}>
                                <Form.Item>
                                    <Input placeholder="street 1" />
                                </Form.Item>

                            </Col>

                            <Col span={12}>
                                <Form.Item>
                                    <Input placeholder="street 2" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Input placeholder="state" />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="postal code" />
                        </Form.Item> */}

            <Form.Item>
                <Button type="primary" htmlType="submit">Signup</Button>
            </Form.Item>
            <Link to="/login">Login</Link>
        </Form>
    }
}
const WrappedSignupForm = Form.create({ name: 'signup_' })(SignupForm)
const mapDispatch = {
    signup: (payload) => ({ type: 'SIGNUP', payload })
}
export default connect(null, mapDispatch)(WrappedSignupForm)