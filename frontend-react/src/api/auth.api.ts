import axios from "axios";
import { ApiResponse } from "../type/auth.type";
import { User } from "../type/interface";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  user: User;
}

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const login = async (
  loginData: LoginData
): Promise<ApiResponse<LoginResponse>> => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
