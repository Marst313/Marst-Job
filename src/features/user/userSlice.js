import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearValues } from '../job/jobSlice';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

// ! #1 Register and Login function
const registerUserThunk = async (url, user, thunkApi) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

const clearStoreThunk = async (message, thunkApi) => {
  try {
    thunkApi.dispatch(logoutUser(message));

    thunkApi.dispatch(clearAllJobsState());

    thunkApi.dispatch(clearValues());

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkApi) => registerUserThunk('/auth/register', user, thunkApi));

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkApi) => registerUserThunk('/auth/login', user, thunkApi));

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkApi) => {
  try {
    const resp = await customFetch.patch('/auth/updateUser', user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkApi);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { user } = action.payload;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hallo there ${user.name}`, { autoClose: 500 });
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { user } = action.payload;
        state.user = user;
        addUserToLocalStorage(user);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload, { autoClose: 500 });
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { user } = action.payload;
        state.user = user;
        addUserToLocalStorage(user);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload, { autoClose: 500 });
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error...', { autoClose: 500 });
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
