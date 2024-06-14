import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

export default function StockSearchInput(props) {

    return (
        <form>
            <TextField
                id="searchBar"
                onInput={(e) => handleSearchInput(e.target.value)}
                label="Enter a stock name"
                variant="outlined"
                placeholder="Search..."
                size="small" />
            <IconButton
                type="submit"
                aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </form>
    );
}