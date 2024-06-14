import { useEffect, useState } from "react";

export default function useGetAssetByID(id) {
    // base is the api endpoint which returns some asset informations
    // e.g. api.coincap.io/v2/assets/bitcoin
    const BASE_URL = 'https://api.coincap.io/v2/assets/'

    const createURLQuery = (id) => {
        return BASE_URL + id;
    }

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        let url = createURLQuery(id)
        console.log(`url before fetch is: ${url}`)
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setIsLoading(false);
            })
        //     ,
        //      {
        //     mode: 'cors',
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Accept': 'application/json'
        //     }
        // };

        return () => {
            console.log('cleaning up ?');
            // console.log(data)
            setIsLoading(false);
        };

    }, [id])



    return { data, isLoading };

}