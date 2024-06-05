import styles from "./CertifiedUsers.module.scss";
import { CertifiedUsersProps } from "./CertifiedUsers.types.ts";

import { IoSearch } from "react-icons/io5";
import Button from "../UI components/Button/Button.tsx";
import { users } from "../User/data.ts";

const CertifiedUsers = ({}: CertifiedUsersProps) => {
  const certifiedUsers = users.filter((user) => user.status === "certified");
  const nominateUsers = () => {
    console.log("Nominated Users");
  };
  return (
    <div className={styles.CertifiedUsers}>
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
          text={"Re-enroll"}
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
            <th>View</th>
            <th>Re-Enroll</th>
          </tr>
        </thead>
        <tbody>
          {certifiedUsers.map((user, i) => (
            <tr key={i} className={styles.Columns}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>{user.department}</td>
              <td>
                <Button
                  text={"Download"}
                  type={"submit"}
                  bgColor={""}
                  handleClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </td>
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

export default CertifiedUsers;
