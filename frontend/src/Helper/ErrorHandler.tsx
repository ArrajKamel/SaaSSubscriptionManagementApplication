import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any): void => {
    if (axios.isAxiosError(error)) {
        const errorResponse = error.response;

        if (errorResponse?.data?.errors) {
            const errors = errorResponse.data.errors;

            if (Array.isArray(errors)) {
                // Array of error descriptions
                errors.forEach((err: any) => toast.warning(err.description));
            } else if (typeof errors === "object") {
                // Object of errors, explicitly typed
                Object.values(errors).forEach((errorList: unknown) => {
                    if (Array.isArray(errorList)) {
                        toast.warning(errorList[0]);
                    }
                });
            }
        } else if (errorResponse?.data) {
            // Single error message
            toast.warning(errorResponse.data);
        } else if (errorResponse?.status === 401) {
            // Unauthorized error
            toast.warning("Please login");
            window.history.pushState({}, "LoginPage", "/login");
        } else {
            // Fallback error handling
            toast.warning("An unknown error occurred.");
        }
    } else {
        // Non-Axios error
        toast.warning("An unexpected error occurred.");
    }
};
