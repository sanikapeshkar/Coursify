import { Dispatch, SetStateAction } from "react";
import { MemberTypes } from "../../pages/SuperAdmin/SuperAdmin.types";

export interface DropdownProps { 
    items: MemberTypes[];
    showFilter: boolean;
    setFilter: Dispatch<SetStateAction<MemberTypes>>; 
    onClick: Dispatch<SetStateAction<boolean>>;
} 
