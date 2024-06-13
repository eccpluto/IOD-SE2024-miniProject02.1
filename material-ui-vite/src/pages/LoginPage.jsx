import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import LoginForm from "../components/LoginForm"
import TitleDisplayer from "../components/TitleDisplayer"

function LoginPage(props) {
    const theme = useTheme();
    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                p: 2,
                bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <TitleDisplayer title='Login' color={theme.palette.primary.main}/>
                <LoginForm/>
            </Box>
        </Container>
    )
}

export default LoginPage