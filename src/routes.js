import Home from "./components/Home/Home.jsx"
import Dashboard from "./views/Dashboard.jsx"
var routes = [
  {
    path: "/home",
    name: "sidebar.Home",
    icon: "cg-icons icon-chart-bar-32",
    component: Home
  },
  {
    path: "/dashboard",
    name: "sidebar.dashboard",
    icon: "cg-icons icon-chart-bar-32",
    component: Dashboard
  }
]
export default routes
