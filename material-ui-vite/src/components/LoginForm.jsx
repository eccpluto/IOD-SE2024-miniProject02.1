import Typography from "@mui/material/Typography";
import { useUserContext } from "../context/UserContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function LoginForm(props) {

    // component is stateful
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    const { user, handleUpdateUser } = useUserContext();

    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be greater than 5 characters long.');
        } else if (userPassword === userEmail) {
            setSubmitResult('Email cannot be the same as password.');
        } else {
            setSubmitResult('Logging in...');
            // passing to context to handle validation
            handleUpdateUser({ email: userEmail, password: userPassword });
        }
    }

    const handleUserEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    if (user.email) return (
        <><p>Welcome {user.email}!</p>
            <button onClick={
                () => { handleUpdateUser({}); setSubmitResult('') }
            }>Log Out</button>
        </>
    );

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: theme.palette.secondary.main
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color={theme.palette.tertiary.main}>
                    Sign in
                </Typography>
                {submitResult}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        value={userEmail}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleUserEmailChange}
                    />
                    <TextField
                        value={userPassword}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleUserPasswordChange}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid> */}
                </Box>
            </Box>
        </Container>
    );
}