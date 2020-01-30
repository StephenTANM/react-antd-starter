import Login from "../screens/login"
import Signup from "../screens/signup"
import AuthLayout from "../layouts/auth.layout"
import DashboardLayout from "../layouts/dashboard.layout"
import Dashboard from "../screens/dashboard"
export default [{
    path: '/login',
    exact: true,
    layout: AuthLayout,
    component: Login,
    protected: false
},
{
    path: '/signup',
    exact: true,
    layout: AuthLayout,
    component: Signup,
    protected: false
},
{
    path: '/dashboard',
    exact: false,
    layout: DashboardLayout,
    component: Dashboard,
    protected: false
}
]