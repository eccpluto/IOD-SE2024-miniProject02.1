import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import TitleDisplayer from "../components/TitleDisplayer"
import StockSearchInput from "../components/StockSearchInput"

/**
 * 
 * @param {Object} props 
 * @returns Page containing the inspector tool.
 */
function InspectorPage(props) {
    const theme = useTheme();

    const handleSearch = (query) => {
        console.log(`handling search for: ${query}`);
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                p: 2,
                bgcolor:    theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <TitleDisplayer title="Inspector" color={theme.palette.primary.main}/>
                <StockSearchInput searchCallback = {handleSearch}/>
            </Box>
        </Container>
    )
}

export default InspectorPage