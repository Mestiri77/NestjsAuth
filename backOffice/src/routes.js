/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import PrivateRoute from "./PrivateRoute";

import Users from "pages/user/Users";


import AddUser from "pages/user/AddUser";
import ViewUser from "pages/user/ViewUser";
import AddReclamation from "pages/reclamation/AddReclamation";
import Acceuil from "pages/Acceuil";
import Basic from "pages/LoginTest";
import Clients from "pages/client/Clients";
import AddClient from "pages/client/AddClient";
import ViewClient from "pages/client/ViewClient";
import ViewClientReclamation from "pages/clients-reclamations/ViewClientReclamation";
import ClientReclamation from "pages/clients-reclamations/ClientReclamation";
import AddClientReclamation from "pages/clients-reclamations/AddClientReclamation";
import Reclamations from "pages/reclamation/Reclamations";
import ViewReclamation from "pages/reclamation/ViewReclamation";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  //   // path: "/authentication/sign-in",
  // },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <PrivateRoute component={Dashboard} roles={["admin"]} />,
  },
  {
    type: "collapse",
    name: "Reclamations",
    key: "reclamations",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/reclamations",
    collapse: [
      {
        key: "reclamations",
        route: "/reclamations",
        component: <PrivateRoute component={Reclamations} roles={["admin", "manager"]} />,
      },
      {
        key: "add",
        route: "/reclamations/add",
        component: <PrivateRoute component={AddReclamation} roles={["admin", "manager"]} />,
      },
      {
        key: "view",
        route: "/reclamations/view",
        component: <PrivateRoute component={ViewReclamation} roles={["admin", "manager"]} />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/users",
    collapse: [
      {
        key: "listUsers",
        route: "/users",
        component: <PrivateRoute component={Users} roles={["admin", "manager"]} />,
      },
      {
        key: "add",
        route: "/users/add",
        component: <PrivateRoute component={AddUser} roles={["admin", "manager"]} />,
      },
      {
        key: "view",
        route: "/users/view",
        component: <PrivateRoute component={ViewUser} roles={["admin", "manager"]} />,
      },
    ],
  }, {
    type: "collapse",
    name: "Clients",
    key: "clients",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/clients",
    collapse: [
      {
        key: "listClient",
        route: "/clients",
        component: <PrivateRoute component={Clients} roles={["admin", "manager"]} />,
      },
      {
        key: "add",
        route: "/clients/add",
        component: <PrivateRoute component={AddClient} roles={["admin", "manager"]} />,
      },
      {
        key: "view",
        route: "/clients/view",
        component: <PrivateRoute component={ViewClient} roles={["admin", "manager"]} />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Clients Reclamation",
    key: "clients-reclamations",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/clients/reclamations",
    collapse: [
      {
        key: "list-clients-reclamations",
        route: "/clients/reclamations",
        component: <PrivateRoute component={ClientReclamation} roles={["admin", "manager"]} />,
      },
      {
        key: "add",
        route: "/clients/reclamations/add",
        component: <PrivateRoute component={AddClientReclamation} roles={["admin", "manager"]} />,
      },
      {
        key: "view",
        route: "/clients/view",
        component: <PrivateRoute component={ViewClientReclamation} roles={["admin", "manager"]} />,
      },
    ],
  },

  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Acceuil",
  //   key: "acceuil",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/acceuil",
  //   component: <Acceuil />,
  // },

  {
    type: "collapse",
    name: "Sign In client",
    key: "sign-in-client",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/client/sign-in",
    component: <Basic />,
  },
  {
    type: "collapse",
    name: "Sign Up Client",
    key: "sign-up-client",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/client/sign-up",
    component: <SignUp />,
  },
  // {
  //   type: "collapse",
  //   name: "ReclamationClient",
  //   key: "reclamation-client",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/client/ReclamationTest",
  //   component: <ReclamationTest />,
  // },
  // {
  //   type: "title",
  //   name: "Si",
  //   key: "si",
  //   icon: <Icon fontSize="small">alert</Icon>,
  //   route: "/authentication/sign-up/test",
  //   component: <SignUp />,
  // },
];

export default routes;
