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

import { useState, useEffect, useContext } from "react";

// react-router components
import { useLocation, Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";
import Nav from "react-bootstrap/Nav";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import axios from "axios";
import { UserContext } from "App";
import Accordion from "react-bootstrap/Accordion";
import Settings from "examples/Configurator/Settings";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleOpenProfile = (event) => setOpenProfile(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleCloseProfile = () => setOpenProfile(false);
  const { user, setUser } = useContext(UserContext);
  // Render the profile menu
  const renderMenuProfile = () => (
    <Menu
      anchorEl={openProfile}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openProfile)}
      onClose={handleCloseProfile}
      sx={{ mt: 2,width:150 }}
    >
      
      <Nav.Item className="btn btn-light w-100 text-start">
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav.Item>
      {/* <NotificationItem title={user.lastName} /> */}
      <Accordion className="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Settings</Accordion.Header>
          <Accordion.Body>
            <Settings />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Menu>
  );

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });
  const navigate = useNavigate();
  const isUserSignedIn = !!localStorage.getItem("token");
  const handelLogOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <div className="d-flex justify-content-between w-100">
          <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
            <div className="d-flex gap-3">
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <Breadcrumbs
                icon="home"
                title={route[route.length - 1]}
                route={route}
                light={light}
              />
            </div>
          </MDBox>
          {isMini ? null : (
            <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
              {/* <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox> */}
              <MDBox color={light ? "white" : "inherit"}>
                {isUserSignedIn ? (
                  <>
                    <IconButton
                      size="small"
                      disableRipple
                      color="inherit"
                      sx={navbarIconButton}
                      onClick={handleConfiguratorOpen}
                    >
                      <Icon sx={iconsStyle}>settings</Icon>
                    </IconButton>
                    <IconButton
                      size="small"
                      disableRipple
                      color="inherit"
                      sx={navbarIconButton}
                      aria-controls="notification-menu"
                      aria-haspopup="true"
                      variant="contained"
                      onClick={handleOpenProfile}
                    >
                      <Icon sx={iconsStyle}>account_circle</Icon>
                    </IconButton>
                    <IconButton
                      size="small"
                      disableRipple
                      color="inherit"
                      sx={navbarIconButton}
                      aria-controls="notification-menu"
                      aria-haspopup="true"
                      variant="contained"
                      onClick={handleOpenMenu}
                    >
                      <Icon sx={iconsStyle}>notifications</Icon>
                    </IconButton>
                    {renderMenu()}
                    {renderMenuProfile()}
                    <IconButton
                      size="small"
                      disableRipple
                      color="inherit"
                      sx={navbarIconButton}
                      onClick={handelLogOut}
                    >
                      <Icon sx={iconsStyle}>logout</Icon>
                    </IconButton>
                    {/* <h4>{user.fistName + " " + user.lastName}</h4> */}
                  </>
                ) : (
                  <></>
                )}
              </MDBox>
            </MDBox>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
