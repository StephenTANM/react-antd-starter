import React from 'react'
import { Menu } from "antd"
import { Link } from "react-router-dom"
const AdminNav = () => {
    return (
        <Menu
            style={{ zIndex: 1 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
        // inlineCollapsed={this.state.collapsed}
        >
            <Menu.Item key="1">
                <Link to="/dashboard/one"><span>ONE</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/dashboard/two"><span>TWO</span></Link>
            </Menu.Item>
        </Menu>
    )
}

export default AdminNav
