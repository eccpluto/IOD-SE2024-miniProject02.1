import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<HomePage {...props} />} />
            <Route path="/login" element={<LoginPage {...props} />} />
            <Route path="/account" element={<AccountPage {...props} />} />
        </Routes>
    )
}

export default AppRoutes;