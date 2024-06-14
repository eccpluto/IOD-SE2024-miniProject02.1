import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useDataContext } from '../context/DataContext';

/**
 * 
 * @param {*} props which are a data object comprising stock details
 * @returns A card which sumarises some metrics of a stock / security
 */
export default function StockCard(props) {

    // const [userLibraryData, handleAddToLibrary] = useDataContext();

    const data = props.stockDetails.data;

    function handleAddToLibraryClick() {
        handleAddToLibrary(data);
    }

    if (!(data)) return (<></>)

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.symbol}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.id}
                </Typography>
                <Typography variant="body2">
                    {`Delta 24 hour: ${data.changePercent24Hr}`}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={data.explorer}>Explore Blockshain</Button>
                {/* only display these options if user account is active */}
                {/* <Button size="small" onClick={handleAddToLibraryClick}>Add to Library</Button> */}
                <Button size="small" >Add to Library</Button>
                <Button size="small">Remove from Library</Button>
            </CardActions>
        </Card>
    )
}