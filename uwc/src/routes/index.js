import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import WorkerPage from "../pages/WorkerPage";
import VehiclePage from "../pages/VehiclePage";
import MCPPage from "../pages/MCPPage";
import SettingsPage from "../pages/SettingsPage";
import { Navigate } from "react-router-dom";
import RoutePlanningPage from "../pages/RoutePlanningPage";
import SingleVehiclePage from "../pages/SingleVehiclePage";
import SingleMCPPage from "../pages/SingleMCPPage";
//3 more page


const routes = [
    {
        component: () => <Navigate to="/login" />,
        path: "/",
    },
    {
        component: LoginPage,
        path: "/login",
    },
    {
        component: DashboardPage,
        path: "/dashboard",
    },
    {
        component: WorkerPage,
        path: "/worker",
    },
    {
        component: VehiclePage,
        path: "/vehicle",
    },
    {
        component: MCPPage,
        path: "/mcp",
    },
    {
        component: SettingsPage,
        path: "/setting",
    },
    {
        component: RoutePlanningPage,
        path: "/mcp/planningRoute"
    },{
        component: SingleVehiclePage,
        path: "/vehicle/singleVehicle"
    },
    {
        component: SingleMCPPage,
        path: "/mcp/singleMCP"
    }

]
export default routes
