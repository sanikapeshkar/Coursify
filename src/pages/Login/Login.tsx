import { LoginProps } from "./Login.types";
import styles from './Login.module.scss';

import googleButton from '../../assets/googleSignInBtn.png';
import { loginUser } from "../../services/Login.service";

const Login = ({}: LoginProps) => {

  const handleClick = async () => {
    try {
      const response = await loginUser();
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
    // window.open('https://6ab8-152-58-33-41.ngrok-free.app/api/auth/google', '_self');
  }

  return (
    <div className={styles.Login}>
      <div className={styles.Left}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjE3IiB2aWV3Qm94PSIwIDAgODAgMjE3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC4wODM0NzQ4IDExOC40MDZDMS45MDM1OSAxNDkuNTg5IDI4LjgxOTYgMTUyLjAzNSAzOC42Nzg1IDE1MC41MDdMMC4wODM0NzQ4IDIxN0gyOC44MTI4QzUxLjYyNDggMTg3Ljk5NyA1OS40NzgxIDE3NS45MzcgNjYuOTU3NCAxNjEuOTkyQzkxLjIyMTYgMTE2Ljc1MyA3Ny4yOTQgOTMuODY2OSA2MC4yMjYzIDg0LjM1MzJDNDIuNjQ5MiA3NC41NTU1IC0yLjE5MTY3IDc5LjQyNzQgMC4wODM0NzQ4IDExOC40MDZaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIzNSIgY3k9IjMzIiByPSIzMyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
          alt="Coditas Logo"
        />
      </div>
      <div className={styles.Right}>
        <div className={styles.ImgContainer}>
          <img
            src=""
            className={styles.Logo}
          />
          <h1 className={styles.TitleMain}>Hipaa</h1>
        </div>
        <h2 className={styles.TitleSecondary}>Welcome to HIPAA training platform</h2>
        <p className={styles.Para}>Sign in using your Coditas G-suite account</p>
        <img
          src={googleButton}
          alt="Google SignIn Btn"
          className={styles.GoogleSignInBtn}
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default Login;  
