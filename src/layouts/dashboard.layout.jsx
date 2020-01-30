import React, { Component } from 'react'
import { Layout } from "antd"
import Nav from '../components/common/nav/nav'
import HeaderNav from '../components/common/nav/header.nav'

const { Sider, Content, Header } = Layout
class DashboardLayout extends Component {
    render() {
        const { children } = this.props
        return (
            <Layout className="vw100">
                <Header className="bg-white">
                    <HeaderNav />
                </Header>
                <Layout className="vh100">

                    <Sider collapsible>
                        <Nav />
                    </Sider>

                    <Layout className="p-2">
                        <Content className="p-2">
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default DashboardLayout