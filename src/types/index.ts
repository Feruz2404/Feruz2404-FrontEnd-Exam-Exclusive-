export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface LoginRequest {
    username: string;
    password: string;
  }
  
 export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  }