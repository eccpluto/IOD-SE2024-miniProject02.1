import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useState } from 'react'
import useTheme from "@mui/material/styles/useTheme"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useUserContext } from '../context/UserContext';

function MyAppBar(props) {
    const theme = useTheme();
    const { user, handleUpdateUser } = useUserContext();

    // anchor state for popup menus
    const [anchorElMainMenu, setAnchorElMainMenu] = useState(null);
    const [anchorElAccountMenu, setAnchorElAccountMenu] = useState(null);

    const handleMainMenu = (event) => {
        setAnchorElMainMenu(event.currentTarget);
    }
    const handleAccountMenu = (event) => {
        setAnchorElAccountMenu(event.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorElMainMenu(null);
        setAnchorElAccountMenu(null);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' sx={{
                bgcolor: theme.palette.secondary.main
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="main menu"
                        aria-controls='menu-main'
                        aria-haspopup="true"
                        onClick={handleMainMenu}
                        color='inherit'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* menu openable inside Toolbar */}
                    <Menu
                        id="main-menu"
                        anchorEl={anchorElMainMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        open={Boolean(anchorElMainMenu)}
                        onClose={handleCloseMenu}
                    >
                        {/* items inside menu */}
                        <MenuItem key="home" onClick={handleCloseMenu}>
                            <NavLink to={"/"}>Home</NavLink>
                        </MenuItem>
                        {/* only enable login page access if no user logged in */}
                        {(!user.email) && (<MenuItem key='login' onClick={handleCloseMenu}>
                            <NavLink to={"/login"}>Login</NavLink>
                        </MenuItem>)}
                        <MenuItem key="inspector" onClick={handleCloseMenu}>
                            <NavLink to={"/inspector"}>Inspector</NavLink>
                        </MenuItem>
                    </Menu>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        Perspector
                    </Typography>
                    {/* diplay the account button if the userContext indicates
                    the user has logged in TODO */}
                    {(user.email) && (

                        <IconButton
                            size="large"
                            aria-label="account menu"
                            aria-controls='menu-account'
                            aria-haspopup="true"
                            onClick={handleAccountMenu}
                            color='inherit'
                        >
                            <AccountCircle />
                        </IconButton>
                    )}
                    {/* menu openable inside Toolbar */}
                    <Menu
                        id="account-menu"
                        anchorEl={anchorElAccountMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorElAccountMenu)}
                        onClose={handleCloseMenu}
                    >
                        {/* items inside menu */}
                        <MenuItem key="account" onClick={handleCloseMenu}>
                            <NavLink to={"/account"}>Account</NavLink>
                        </MenuItem>
                        <MenuItem key="library" onClick={handleCloseMenu}>
                            <NavLink to={"/library"}>Library</NavLink>
                        </MenuItem>
                        <MenuItem key="logout" onClick={() => {handleCloseMenu(); handleUpdateUser({})}}>
                            <NavLink to={"/"}>Logout</NavLink>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box >
    )

}

export default MyAppBar;