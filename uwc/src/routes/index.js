import LandingPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

const routes = [
    {
        component: LandingPage,
        path: "/",
    },
    {
        component: DashboardPage,
        path: "/dashboard",
    }
]
export default routes
