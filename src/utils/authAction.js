import { login,logout } from '../features/tasks/authSlice';

export const googleLogin = (response) => async (dispatch) => {
  try {
    if (response.accessToken) {
      dispatch(loginSuccess(response.profileObj));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    console.error('Google login error:', error);
    // Handle error if needed
  }
};

