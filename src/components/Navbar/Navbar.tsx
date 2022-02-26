import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {setCookie} from "nookies";


const useStyles = makeStyles(() => ({
    navbar:{
        backgroundColor: "#1b87cf"
    },
    grow: {
        flexGrow: 1,
    },
    routerLink: {
        fontSize: "1.25rem",
        color: "white",
        "&:hover": {
            color: "white"
        }
    },
    caption: {
        fontSize: "1px"
    }
}));
export default function NavBar() {
    const classes = useStyles();
    const history = useHistory();

    const handleLogout = async () => {
        await setCookie(null, 'accessToken', '', {
            maxAge: -1,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
        })
        await setCookie(null, 'userId', '', {
            maxAge: -1,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
        })
        window.localStorage.removeItem("current_user");
        await history.push("/login");
    }
    return (
        <AppBar position="static">
            <Toolbar className={classes.navbar}>
                <Box m={2}>
                    <Typography variant="h6" component="div">
                        Budget Planner
                    </Typography>
                </Box>
                <Button color="inherit"
                     component={RouterLink} className={classes.routerLink}
                     to={'/user-management'}>
                    User Management
                </Button>

                <div className={classes.grow}/>

                <Button color="inherit" component={RouterLink} className={classes.routerLink} to={'/login'}>Login</Button>


            </Toolbar>
        </AppBar>
    );
}