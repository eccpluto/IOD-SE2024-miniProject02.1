import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<HomePage {...props} />} />
            <Route path="/login" element={<LoginPage {...props} />} />
        </Routes>
    )
}

export default AppRoutes;