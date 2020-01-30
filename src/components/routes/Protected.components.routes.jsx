import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isLoggedInSelector } from '../../store/selectors/selectors'

const ProtectedRoute = ({ component: Component, layout: Layout, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                        <Redirect
                            to={{
                                pathname: '/signup',
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}
const mapState = (state) => ({
    isLoggedIn: isLoggedInSelector(state)
})

export default connect(mapState)(ProtectedRoute)
