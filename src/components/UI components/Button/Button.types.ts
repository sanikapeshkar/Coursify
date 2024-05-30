import { StakeholderItemProps } from "../StakeholderItem/StakeholderItem.types";

export interface ButtonProps { 
    text: string;
    type: 'submit' | 'reset' | 'button';
    bgColor: string;
    stakeholders?: StakeholderItemProps[];
    handleClick: () => void;
} 
