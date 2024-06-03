import axiosInstance from "../axiosInstance";
import { Inputs } from "../components/AddModule/AddModule.types";

export const postAddModule = async (data: Inputs) => {
  try {
    const response = await axiosInstance.post('', data);
    console.log(response);
    return response;
  } catch (error) {
    console.log('Error :: postAddModule :: ', error);
  }
}

export const getEditModule = async (id: string) => {
  try {
    // const response = await axiosInstance.get(`/${id}`);
    // console.log(response);
    // return response;

    return {
      moduleTitle: 'Random Module',
      videoTitle: 'Random Video',
      videoLink: 'random Link',
      noOfQuestions: 50,
      minMarks: 5,
    }
  } catch (error) {
    console.log('Error :: getEditModule :: ', error);
  }
}

export const postEditModule = async (data: Inputs) => {
  try {
    const response = await axiosInstance.post('', data);
    console.log(response);
    return response;
  } catch (error) {
    console.log('Error :: postEditModule :: ', error);
  }
}