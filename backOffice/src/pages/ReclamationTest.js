/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { Autocomplete, TextField } from "@mui/material";


function ReclamationTest() {

    const top100Films = [
        { label: 'Réclamation Technique', year: 1994 },
        { label: 'Réclamation Commerciale', year: 1972 },
    ]

    const motifReclamation = [
        { label: 'Mobile', year: 1994 },
        { label: 'Fix', year: 1972 },
        { label: 'Data', year: 1972 },
    ]
    return (

        <Card style={{ width: '50%', margin: '0 auto' }}>
            <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={1}
                textAlign="center"
            >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                    Réclamation
                </MDTypography>
                {/* <MDTypography display="block" variant="button" color="white" my={1}>
                    Enter your email and password to register
                </MDTypography> */}
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                    <MDBox mb={2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type-Reclamation" />}
                        />
                    </MDBox>
                    <MDBox mb={2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={motifReclamation}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Motif-Reclamation" />}
                        />
                    </MDBox>
                    <MDBox mb={2}>

                        {/* fixer le groupemment */}
                        <Autocomplete
                            id="grouped-demo"
                            options={motifReclamation.sort()}
                            groupBy={(option) => motifReclamation.label}
                            getOptionLabel={(top100Films) => top100Films.label}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Objet-réclamtion" />}
                        />
                    </MDBox>
                    {/* <MDBox mb={2} style={{ width: '50%', margin: '0 auto' }}>
                        <MDInput type="text" label="First Name" variant="standard" fullWidth />
                    </MDBox> */}
                    {/* <MDBox mb={2}>
                        <MDInput type="text" label="Last Name" variant="standard" fullWidth />
                    </MDBox>
                    <MDBox mb={2}>
                        <MDInput type="text" label="CIN/MF" variant="standard" fullWidth />
                    </MDBox>
                     */}
                    <MDBox mb={2}>
                        <MDInput label="Type here..." multiline rows={5} fullWidth /> {/*add maxLength="1" */}
                    </MDBox>
                    <MDBox mb={2}>
                        <MDBox mb={2}>
                            <input type="tel" label="Numéro de service" maxLength="1" />
                        </MDBox>
                        <MDInput type="file" variant="outlined" size="large" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" ml={-1}>
                        <Checkbox />
                        <MDTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                        >
                            &nbsp;&nbsp;I agree to the&nbsp;
                        </MDTypography>
                        <MDTypography
                            component="a"
                            href="#"
                            variant="button"
                            fontWeight="bold"
                            color="info"
                            textGradient
                        >
                            Terms and Conditions
                        </MDTypography>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                        <MDButton variant="gradient" color="info" fullWidth>
                            sign in
                        </MDButton>
                    </MDBox>
                    <MDBox mt={3} mb={1} textAlign="center">
                        <MDTypography variant="button" color="text">
                            Already have an account?{" "}
                            <MDTypography
                                component={Link}
                                to="/authentication/sign-in"
                                variant="button"
                                color="info"
                                fontWeight="medium"
                                textGradient
                            >
                                Sign In
                            </MDTypography>
                        </MDTypography>
                    </MDBox>
                </MDBox>
            </MDBox>
        </Card>

    );
}

export default ReclamationTest;
