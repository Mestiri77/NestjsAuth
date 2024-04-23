// /**
// =========================================================
// * Material Dashboard 2 React - v2.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

import { useState, useEffect, useMemo, createContext } from "react";

// // react-router components
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

// // @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
import MDBox from "components/MDBox";

// // Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// // Material Dashboard 2 React themes
import theme from "assets/theme";
// // import themeRTL from "assets/theme/theme-rtl";

// // Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

// // Material Dashboard 2 React routes
import routes from "routes";

// // Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// // Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

import SignIn from "layouts/authentication/sign-in";

import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Spinner from "react-bootstrap/Spinner";
import Acceuil from "pages/Acceuil";
import Basic from "pages/LoginTest";
import Cover from "layouts/authentication/reset-password/cover"
import SignUp from "layouts/authentication/sign-up";
import "assets/style/effect.css";

export const UserContext = createContext();
export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const navigate = useNavigate();
  // const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ role: "admin", fistName: "Yassin", lastName: "Louhichi" });
      setIsLoading(false);
    } else {
      // navigate("/authentication/sign-in");//***************************** */
      setIsLoading(false);
    }
  }, []); //[user] infini loop



  //   // Cache for the rtl
  //   // useMemo(() => {
  //   //   const cacheRtl = createCache({
  //   //     key: "rtl",
  //   //     stylisPlugins: [rtlPlugin],
  //   //   });

  //   //   setRtlCache(cacheRtl);
  //   // }, []);

  //   // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  //   // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Material Dashboard 2"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {/* {layout === "vr" && <Configurator />} */}
        {isLoading ? (
          <div className="position-fixed w-100 h-100 justify-content-center align-items-center d-flex">
            <Spinner />
          </div>
        ) : user ? (
          <DashboardLayout>
            <DashboardNavbar />
            <Routes>
              {/* <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />} /> */}
              {getRoutes(routes)},
              <Route path="*" element={<Navigate to="/dashboard" />} />
              {/* <Route path="/acceuil" element={<Acceuil />} /> */}
            </Routes>
          </DashboardLayout>
        ) : (
          <Routes>
            <Route index element={<Acceuil />} />
            <Route path="/authentication/client/sign-in" element={<Basic />} />
            <Route path="/authentication/sign-in" element={<SignIn />} />
            <Route path="/reset-password" element={<Cover />} />
            <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
            <Route path="/authentication/client/sign-up" element={<SignUp />} />
          </Routes>
        )}
      </ThemeProvider>
    </UserContext.Provider>
  );
}
