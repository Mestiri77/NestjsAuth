import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
function Acceuil() {
    const navigate = useNavigate();
    return (
        <div className='d-flex justify-content-center align-items-center position-fixed w-100 p-6 m-6'
            style={{
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/fr/f/f9/LOGO_TT_.jpg")',
                // backgroundColor: '',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                height: '100vh'
            }}>
            <div className='col-6  h-50 d-flex justify-content-center align-items-center blur'
                style={{
                    // backdropFilter: blur(),

                }}>
                <Button
                    className="col-4 "
                    style={{
                        // backdropFilter: blur(),
                        backgroundColor: "red"
                    }}
                    onClick={() => navigate("/authentication/sign-in")}
                >Espace TT</Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                    className="col-4 "
                    style={{
                        // backdropFilter: blur(),
                        backgroundColor: "red"
                    }}
                    onClick={() => navigate("/authentication/client/sign-in")}
                >Espace Client</Button>
            </div>
        </div>
    )
}

export default Acceuil