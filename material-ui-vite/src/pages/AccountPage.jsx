import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import { useUserContext } from "../context/UserContext"

function AccountPage(props) {
    const theme = useTheme();
    const { user, handleUpdateUser } = useUserContext();

    if (!user.email) {
        return (
            <Container maxWidth="xl">
                <Box sx={{
                my: 4,
                p: 2,
                bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
                }}>
                    <Typography>
                        You have been logged out. Please leave this page.
                    </Typography>
                </Box>
            </Container >
        )
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                p: 2,
                bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <Typography variant="h4" component="h1" sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                }}>
                    Manage your account
                </Typography>
                <Typography>
                    Welcome, {user.email}!
                </Typography>
                <button onClick={() => {
                    handleUpdateUser({});

                }}>Log Out</button>
            </Box>
        </Container >
    )
}

export default AccountPage