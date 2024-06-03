import axiosInstance from "../axiosInstance"

export const loginUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/google', {withCredentials: true});
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}