import UserModuleList from "../../components/UserModuleList/UserModuleList.tsx";
import styles from "./User.module.scss"; 
import { UserProps } from "./User.types.ts" 
import { moduleData } from "../../components/ModuleList/data.ts";

const User = ({}: UserProps) => { 
    return (
       <div className={styles.User}>
        <UserModuleList usermodules={moduleData} type={""}/>
       </div>
    )
} 
 
export default User 
