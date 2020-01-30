import React, { Component } from 'react'
import { AnimatedRoute } from 'react-router-transition'
import { mapSubPageStyles, maintheme } from '../styles/maintheme.styles'
import dashboardRoutesData from '../data/dashboard.routes.data'

class Dashboard extends Component {
    RenderRoutes = (route) => (
        <AnimatedRoute
            className="switch-wrapper"
            component={route.component}
            path={route.path}
            atEnter={maintheme.subPageEnter}
            atLeave={maintheme.subPageLeave}
            atActive={maintheme.subPageActive}
            mapStyles={mapSubPageStyles} />
    )
    render() {
        return (
            <div >
                {
                    dashboardRoutesData.map(
                        this.RenderRoutes
                    )
                }
            </div>
        )
    }
}

export default Dashboard