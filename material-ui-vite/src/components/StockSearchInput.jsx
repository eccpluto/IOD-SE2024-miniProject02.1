import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { useState } from "react";

export default function StockSearchInput(props) {

    const [query, setQuery] = useState('');

    const handleSubmit = () => {
        console.log('submitting query.')
        props.searchCallback(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="searchBar"
                value={query}
                onInput={(e) => setQuery(e.target.value)}
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