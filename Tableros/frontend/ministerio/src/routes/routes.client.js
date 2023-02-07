import {AdminLayout} from "../layouts/AdminLayout"
// import { Home } from "../pages/Client";
import { HomeAdmin} from "../pages/Admin"; 
import {LoginAdmin} from "../pages/Admin/LoginAdmin"



const routerLogin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
  },
  {
    path: "/",
    layout: AdminLayout,
    component: HomeAdmin,
  },
];

export default routerLogin;
