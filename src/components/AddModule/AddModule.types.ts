import { Dispatch, SetStateAction } from "react";

export interface AddModuleProps {
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
