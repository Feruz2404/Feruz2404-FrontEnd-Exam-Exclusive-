import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

interface UserState extends User {
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const USER_API_ENDPOINT = "https://dummyjson.com/auth/me";

// Async thunk for fetching user data
export const fetchUserData = createAsyncThunk<User, void, { rejectValue: string }>(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return rejectWithValue("User is not authenticated");
    }

    try {
      const response = await fetch(USER_API_ENDPOINT, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return rejectWithValue("Failed to fetch user data");
      }

      const data = await response.json();
      return {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address?.address || "No address provided",
      };
    } catch (error: any) {
      return rejectWithValue(error?.message || "Unknown error");
    }
  }
);

// Initial state
const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  loading: false,
  error: null,
  isLoggedIn: !!localStorage.getItem("token"),
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      };
    },
    updateUserData: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<User>) => {
        return {
          ...state,
          ...action.payload,
          loading: false,
          isLoggedIn: true,
        };
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, updateUserData } = userSlice.actions;
export default userSlice.reducer;
