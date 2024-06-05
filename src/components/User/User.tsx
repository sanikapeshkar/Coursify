import styles from "./User.module.scss";
import { UserProps } from "./User.types.ts";

const User = ({ name, email, designation, department, progress }: UserProps) => {
  return (
    <table className={styles.User}>
      <tbody>
        <tr>
          <td>{name}</td>
        </tr>
        <tr>
          <td>{email}</td>
        </tr>
        <tr>
          <td>{designation}</td>
        </tr>
        <tr>
          <td>{department}</td>
        </tr>
        <tr>
          <td>{progress}</td>
        </tr>
        <tr>
          <td>{}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default User;