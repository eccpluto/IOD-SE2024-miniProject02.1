import { createContext, useContext, useState } from "react";
import mockData from '../data/mockUserData.json'

const DataContext = createContext();

export const DataProvider = (props) => {

    // pull in an array of strings representing the library
    const [data, setData] = useState(mockData.library);

    const handleAddToLibrary = (data) => {
        // this code adds metrics from data into the provider state, which "should" be consumed by the user LibraryTable component
    }

    return (
        <DataContext.Provider value={{ data, handleAddToLibrary }}>
            {props.children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    return useContext(DataContext);
}