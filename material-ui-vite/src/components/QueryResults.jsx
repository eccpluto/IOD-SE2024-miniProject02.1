import useGetAssetByID from "../hooks/useGetAssetByID"
import StockCard from "./StockCard";

export default function QueryResults(props) {

    // we will only consider queries that return a coin type, i.e. the assets endpoint
    // const [data. query, isLoading] = useGetData('')

    // if there are displayable results in this window -> then we can allow the user to click and open a result in the inspector itself.
    // this will eventaully allow for the history, rates, exchanges, candlestick to be displayed

    const { data, isLoading } = useGetAssetByID(props.query);

    console.log(isLoading)
    console.log(`data is: ${data}`)

    if (isLoading) return (
        <p> Loading ...</p>
    )
    if (!isLoading && data.error) return (
        <p> Error: {props.query} was not a valid search.</p>
    )

    return (
        <>
            <StockCard stockDetails={data}/>
            {
                console.log(data)
            }        </>
    )
}