import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import SubPage from "../Pages/SubscriptionPage/SubscriptionPage";
import { ProtectedRoute, ProtectedPremium, ProtectedAuth} from "./ProtectedRoutes";
import PremiumPage from "../Pages/PremiumPage/PremiumPage"
import PremiumPlanPage from "../Pages/PremiumPlanPage/PremiumPlanPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: ""           , element: <HomePage /> }, 
            { path: "login"      , element: <ProtectedAuth>    <LoginPage />       </ProtectedAuth> },
            { path: "register"   , element: <ProtectedAuth>    <RegisterPage />    </ProtectedAuth> },
            { path: "sub"        , element: <ProtectedRoute>   <SubPage />         </ProtectedRoute> },
            { path: "premium"    , element: <ProtectedPremium> <PremiumPage />     </ProtectedPremium> },
            { path: "premiumPlan", element: <ProtectedRoute>   <PremiumPlanPage /> </ProtectedRoute>}
        ]
    }
]);
