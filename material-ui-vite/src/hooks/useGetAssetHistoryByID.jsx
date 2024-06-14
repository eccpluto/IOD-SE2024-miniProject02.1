export default function useGetAssetHistoryByID(props) {
    // base is the API endpoint that returns the history for a particular asset, given an ID
    // and required interval e.g. api.coincap.io/v2/assets/bitcoin/history?interval=d1
    const BASE_URL = 'https://api.coincap.io/v2/assets/'

    const createURLQuery = (id, interval) => {
        return BASE_URL + id + '/history?interval=' + interval;
    }

    return (<>
    </>)

}