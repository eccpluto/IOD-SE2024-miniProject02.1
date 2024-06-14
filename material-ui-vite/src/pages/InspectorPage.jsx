import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import TitleDisplayer from "../components/TitleDisplayer"
import StockSearchInput from "../components/StockSearchInput"
import QueryResults from "../components/QueryResults"
import { useState } from "react"

/**
 * 
 * @param {Object} props 
 * @returns Page containing the inspector tool.
 */
function InspectorPage(props) {
    const theme = useTheme();

    const [query, setQuery] = useState('');

    const handleSearch = (query) => {
        console.log(`setting query to: ${query}`);
        setQuery(query);
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{
                my: 4,
                p: 2,
                bgcolor: theme.palette.secondary.main,
                borderRadius: 4,
            }}>
                <TitleDisplayer title="Inspector" color={theme.palette.primary.main} />
                <StockSearchInput searchCallback={handleSearch} />
                {/* {console.log(query)} */}
                {/* Display QueryResults component if there is a query */}
                {(query != '') && (<QueryResults query={query} />)}
            </Box>
        </Container>
    )
}

export default InspectorPage