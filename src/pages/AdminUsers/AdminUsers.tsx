import styles from "./AdminUsers.module.scss";
import { AdminUsersProps } from "./AdminUsers.types.ts";

import { useNavigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const AdminUsers = ({}: AdminUsersProps) => {

  const navigate = useNavigate();

  return (
    <div className={styles.AdminUsers}>
      <div className={styles.UserTypes}>
        <h1 className={styles.UsersHeading}>Users</h1>
        <div
          className={styles.UserTypeBtn}
          onClick={() => navigate("enrolled")}
        >
          <FaUser style={{ backgroundColor: "#2c74d6;" }} />
          <p className={styles.Para}>Enrolled</p>
        </div>
        <div
          className={styles.UserTypeBtn}
          onClick={() => navigate("unenrolled")}
        >
          <FaUser style={{ backgroundColor: "#2c74d6;" }} />
          <p className={styles.Para}>Unenrolled</p>
        </div>
        <div
          className={styles.UserTypeBtn}
          onClick={() => navigate("certified")}
        >
          <FaUser style={{ backgroundColor: "#2c74d6;" }} />
          <p className={styles.Para}>Certified</p>
        </div>
      </div>
      <div className={styles.Users}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminUsers;
