// import Copyright from "../components/Copyright"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import TitleDisplayer from "../components/TitleDisplayer";
import Copyright from "../components/Copyright";

function HomePage(props) {
    const theme = useTheme();
    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                p: 2,
                bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <TitleDisplayer title='Perspector' color={theme.palette.primary.main}/>
                <Typography sx={{ mb: 1.5, textAlign: "center" }} color="text.secondary">
                    Perspector is a browser and inspection tool for blockchain securities.
                </Typography>
                <Copyright />
            </Box>
        </Container>
    )
}

export default HomePage