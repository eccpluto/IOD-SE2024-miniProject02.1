export default function useGetAssetByID(props) {
    // base is the api endpoint which returns some asset informations
    // e.g. api.coincap.io/v2/assets/bitcoin
    const BASE_URL = 'api.coincap.io/v2/assets/'

    const createURLQuery = (id) => {
        return BASE_URL + id;
    }

    return (<>
    </>)

}