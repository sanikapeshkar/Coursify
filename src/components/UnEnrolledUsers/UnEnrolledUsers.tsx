import Button from "../UI components/Button/Button.tsx";
import Users from "../Users/Users.tsx";
import { users } from "../Users/data.ts";
import styles from "./UnEnrolledUsers.module.scss";
import { UnEnrolledUsersProps } from "./UnEnrolledUsers.types.ts";
import { IoSearch } from 'react-icons/io5';

const UnEnrolledUsers = ({}: UnEnrolledUsersProps) => {
  const unEnrolledUsers = users.filter((user) => user.status === "unenrolled");
  const nominateUsers = () => {
    console.log("Nominated Users");
  };
  return (
    <div className={styles.UnEnrolledUsers}>
      <div className={styles.Actions}>
        <div className={styles.SearchBar}>
          <input
            className={styles.SearchUser}
            type="search"
            placeholder="Search"
          />
           <IoSearch style={{color: "#2c74d6", fontSize: "1.5rem", cursor: "pointer"}}/>
        </div>
        <Button
          text={"Nominate"}
          type={"submit"}
          bgColor={""}
          handleClick={() => nominateUsers}
        />
      </div>
      <table className={styles.UserTable}>
        <thead>
          <tr className={styles.Columns}>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Nominate</th>
          </tr>
        </thead>
        <tbody>
          {unEnrolledUsers.map((user, i) => (
            <tr key={i} className={styles.Columns}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>{user.department}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnEnrolledUsers;
