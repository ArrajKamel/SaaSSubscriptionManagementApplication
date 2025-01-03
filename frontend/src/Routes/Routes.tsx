import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import SubPage from "../Pages/SubPage/SubPage";
import { ProtectedRoute, ProtectedPremiumRoute} from "./ProtectedRoutes";
import PremiumPage from "../Pages/PremiumPage/PremiumPage"
import PremiumPlanPage from "../Pages/PremiumPlanPage/PremiumPlanPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: ""           , element: <HomePage /> }, 
            { path: "login"      , element: <LoginPage /> },
            { path: "register"   , element: <RegisterPage /> },
            { path: "sub"        , element: <ProtectedRoute><SubPage /></ProtectedRoute> },
            { path: "premium"    , element: <ProtectedPremiumRoute><PremiumPage /></ProtectedPremiumRoute> },
            { path: "premiumPlan", element:  <ProtectedRoute><PremiumPlanPage /></ProtectedRoute>}
        ]
    }
]);
