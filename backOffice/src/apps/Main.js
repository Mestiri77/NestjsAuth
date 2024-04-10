import React, { useState } from 'react'






import Icon from "@mui/material/Icon";
import Configurator from 'examples/Configurator';
import Sidenav from 'examples/Sidenav';
const routes = [{
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
}]
function Main() {
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const handleOnMouseEnter = () => {
        if (!onMouseEnter) {
            // setMiniSidenav(dispatch, false);
            setOnMouseEnter(true);
        }
    };
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            //   setMiniSidenav(dispatch, true);
            setOnMouseEnter(false);
        }
    };
    return (
        <div>
            <>
                <Sidenav
                    color={"black"}
                    brand={true}
                    brandName="Material Dashboard 2"
                    routes={routes}
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                />
                {/* <Configurator />
                {configsButton} */}
            </>
        </div>
    )
}

export default Main