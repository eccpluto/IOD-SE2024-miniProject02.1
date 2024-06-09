import { Routes, Route } from "react-router-dom"
import HomePage from "../components/HomePage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<HomePage {...props} />} />
        </Routes>
    )
}

export default AppRoutes;