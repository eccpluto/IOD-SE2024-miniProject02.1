import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import VirtualisedTable from "../components/VirtualisedTable"
import TitleDisplayer from "../components/TitleDisplayer"

function LibraryPage(props) {
    const theme = useTheme();
    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                p: 2,
                bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <TitleDisplayer titlee="Library" color={theme.palette.primary.main}/>
                <VirtualisedTable></VirtualisedTable>
                {/* <Copyright /> */}
            </Box>
        </Container>
    )
}

export default LibraryPage