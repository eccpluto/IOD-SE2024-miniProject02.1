export default function useGetCandle(props) {
    // base is the API endpoint that returns the candlestick date for a particular asset,
    // given an exchange, interval, baseId (like currency) and quoteId (what you are interested in).
    // e.g. api.coincap.io/v2/candles?exchange=poloniex&interval=h8&baseId=ethereum&quoteId=bitcoin
    const BASE_URL = 'https://api.coincap.io/v2/candles?exchange='

    /**
     * 
     * @param {*} baseId required defaults to ethereum
     * @param {*} quoteId required e.g. bitcoin
     * @param {*} interval require defaults to h8 (8 hours) 
     * @param {*} exchangeId required defaults to poloniex
     * @returns A URL which the API can consume to respond with the requested data
     */
    const createURLQuery = (baseId, quoteId = 'ethereum', interval = 'h8', exchangeId = 'poloniex') => {
        return BASE_URL +
            exchangeId +
            '&interval=' + interval +
            '&baseId=' + baseId +
            '&quoteId=' + quoteId;
    }

    return (<>
    </>)

}