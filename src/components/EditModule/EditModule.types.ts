import { Dispatch, SetStateAction } from "react";

export interface EditModuleProps { 
    moduleId: string;
    setShowModal: Dispatch<SetStateAction<boolean>>;
} 

export interface Inputs {
    moduleTitle: string;
    videoTitle: string;
    videoLink: string;
    noOfQuestions: number;
    minMarks: number;
    addQuizBtn: FileList;
}

export interface State {
    moduleTitle: string;
    videoTitle: string;
    videoLink: string;
    noOfQuestions: number;
    minMarks: number;
}

export interface Action {
    type: string;
    moduleTitle: string;
    videoTitle: string;
    videoLink: string;
    noOfQuestions: number;
    minMarks: number;
}