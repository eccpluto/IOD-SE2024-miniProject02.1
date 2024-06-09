import Copyright from "../components/Copyright"
import ProTip from "../components/ProTip"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"

function InspectorPage(props) {
    const theme = useTheme();
    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                // bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <Typography variant="h4" component="h1" sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                }}>
                    Inspector
                </Typography>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    )
}

export default InspectorPage