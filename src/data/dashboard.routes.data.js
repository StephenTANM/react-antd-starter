import One from "../components/dashboard/one.dashboard";
import Two from "../components/dashboard/two.dashboard";

// import Login from "../screens/login"
// import Signup from "../screens/signup"
// import AuthLayout from "../layouts/auth.layout"
// import DashboardLayout from "../layouts/dashboard.layout"
// import Dashboard from "../screens/dashboard"
export default [{
    path: '/dashboard/one',
    // exact: true,
    // layout: AuthLayout,
    component: One,
    // protected: false
}, {
    path: '/dashboard/two',
    // exact: true,
    // layout: AuthLayout,
    component: Two,
    // protected: false
}

]