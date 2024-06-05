import styles from "./EnrolledUsers.module.scss";
import { EnrolledUsersProps } from "./EnrolledUsers.types.ts";

import { users } from "../../components/User/data.ts";
import { IoSearch } from "react-icons/io5";

const EnrolledUsers = ({ }: EnrolledUsersProps) => {

  const enrolledusers = users.filter((user) => user.status === "enrolled");
  console.log(enrolledusers);

  return (
    <div className={styles.EnrolledUsers}>
      <div className={styles.UsersHeader}>
        <div className={styles.SearchBar}>
          <input
            className={styles.SearchUser}
            type="search"
            placeholder="Search"
          />
          <IoSearch
            style={{ color: "#2c74d6", fontSize: "1.5rem", cursor: "pointer" }}
          />
        </div>
      </div>
      <table className={styles.UserTable}>
        <thead>
          <tr className={styles.Columns}>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Progress</th>
            <th>Upload</th>
          </tr>
        </thead>
        <tbody>
          {enrolledusers.map((user, index) => (
            <tr key={index} className={styles.Columns}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>{user.department}</td>
              <td>{user.progress}%</td>
              <td className={styles.Uploads}>
                <input type="file"
                  accept=".csv"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledUsers;
