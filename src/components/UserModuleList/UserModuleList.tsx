import styles from "./UserModuleList.module.scss";
import { UserModuleListProps } from "./UserModuleList.types.ts";
import { moduleData } from "../ModuleList/data.ts";
import Module from "../Module/Module.tsx";
const UserModuleList = ({ usermodules, type }: UserModuleListProps) => {
  return (
    <div className={styles.UserModuleList}>
    {usermodules.map((module) => {
      return (
        <Module
          moduleTitle={module.moduleTitle}
          videoTitle={module.videoTitle}
          videoLink={module.videoLink}
          id={module.id}
          type={type}
        />
      );
    })}
  </div>
  )
};

export default UserModuleList;
