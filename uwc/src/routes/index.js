import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import WorkerPage from "../pages/WorkerPage";
import VehiclePage from "../pages/VehiclePage";
import MCPPage from "../pages/MCPPage";
import SettingsPage from "../pages/SettingsPage";

const routes = [
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
    }
]
export default routes
