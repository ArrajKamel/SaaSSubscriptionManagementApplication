import axios from "axios";
import { handleError } from "../Helper/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:5058/api/";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string,
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/register", {
      userName: username,
      emailAddress: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

