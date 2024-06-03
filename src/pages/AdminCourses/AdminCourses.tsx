import ModuleList from "../../components/ModuleList/ModuleList.tsx";
import { moduleData } from "../../components/ModuleList/data.ts";
import styles from "./AdminCourses.module.scss";
import { AdminCoursesProps } from "./AdminCourses.types.ts";

const AdminCourses = ({}: AdminCoursesProps) => {
  return (
    <div className={styles.AdminCourses}>
      <h1>HIPAA TRAINING COURSE</h1>
      <ModuleList modules={moduleData} />
    </div>
  );
};

export default AdminCourses;
