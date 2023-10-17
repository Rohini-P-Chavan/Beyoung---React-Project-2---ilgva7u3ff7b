
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { PersonOutline } from '@mui/icons-material';
import { IconButton, Tab, Tabs, useMediaQuery } from '@mui/material';
import Login from './Login/Login';

import ForgotPassword from './forgotPassword/ForgotPassword';
import Register from './register/Register';


const User = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("login");
    const breakPoint = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabValueToRegister = (event) => {
        setValue('register');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <PersonOutline sx={{ fontSize: "22px" }} />
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>User</DialogTitle> */}
                {/* <DialogContent >
                    <img src="https://www.beyoung.in/images/login-image-final.jpg" alt="profileImg" style={{
                        height: '250px',
                        width: '100%'
                    }} />
                </DialogContent> */}
                <DialogContent sx={{ marginTop: '10px' }}>

                    <Tabs
                        textColor="primary"
                        indicatorColor="primary"
                        value={value}
                        onChange={handleChange}
                        centered
                        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
                        sx={{
                            m: "25px",
                            "& .MuiTabs-flexContainer": {
                                flexWrap: "wrap",
                            },
                        }}
                    >
                        {

                        }
                        <Tab label="Login" value="login" />
                        <Tab label="register" value="register" onClick={tabValueToRegister} />

                        <Tab label="forgotPassword" value="forgotPassword" />
                    </Tabs>
                    {
                        value === 'login' &&
                        (<>
                            <Login handleClose={handleClose} />

                        </>)
                    }
                    {
                        value === 'register' && <>
                            <Register handleClose={handleClose} />
                        </>
                    }
                    {
                        value === 'forgotPassword' && <>
                            <ForgotPassword handleClose={handleClose} />
                        </>

                    }

                </DialogContent >

            </Dialog >
        </>
    );
}
export default User;