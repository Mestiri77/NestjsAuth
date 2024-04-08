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

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { PrimeReactProvider } from 'primereact/api';

// import './assets/prime/index.css';
// import './assets/prime/flags.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
// import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

import "primereact/resources/themes/lara-light-cyan/theme.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <PrimeReactProvider>

        <App />
      </PrimeReactProvider>

    </MaterialUIControllerProvider>
  </BrowserRouter>
);
