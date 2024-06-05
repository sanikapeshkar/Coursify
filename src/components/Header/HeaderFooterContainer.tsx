import { HeaderFooterContainerProps } from "./HeaderFooterContainer.types";
import styles from './HeaderFooterContainer.module.scss';

import { Outlet, useNavigate } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Header = ({ logoutBtn }: HeaderFooterContainerProps) => {

  const navigate = useNavigate();

  const LogoutBtn = logoutBtn;

  return (
    <div className={styles.HeaderFooterContainer}>
      <div className={styles.Header}>
        <div className={styles.Flex}>
          <h1 className={styles.HeaderMain}>
            Hipaa
          </h1>
          <nav className={styles.Nav}>
            <h3 className={styles.NavHeader} onClick={() => navigate('courses')}>Courses</h3>
            <h3 className={styles.NavHeader} onClick={() => navigate('users')}>Users</h3>
          </nav>
        </div>
        <LogoutBtn />
      </div>
      <div className={styles.Outlet}>
        <Outlet />
      </div>
      <div className={`${styles.Footer}`}>
        <nav className={`${styles.Nav} ${styles.Flex}`}>
          <div className={`${styles.Text}`}>
            <p>© 2024 Coditas. All rights reserved.</p>
            <p className={styles.Underline}>
              <a href="" target="_blank"
                className={styles.Terms}
              >
                Privacy Policy
              </a>
            </p>
            <p className={styles.Underline}>
              <a href="" target="_blank"
                className={styles.Terms}
              >
                Terms and Conditions
              </a>
            </p>
          </div>
          <div className={styles.Socials}>
            <a href='https://www.linkedin.com/company/coditas'
              target='_blank'
              className={styles.IconContainer}
            >
              <LinkedInIcon className={styles.Icons} />
            </a>
            <a href='https://www.instagram.com/coditas_hq/?hl=en'
              target='_blank'
              className={styles.IconContainer}
            >
              <InstagramIcon className={styles.Icons} />
            </a>
            <a href='https://www.youtube.com/channel/UCif8dj_W8Yq5KMcoqGkbwkA'
              target='_blank'
              className={styles.IconContainer}
            >
              <YouTubeIcon className={styles.Icons} />
            </a>
            <a href='https://www.facebook.com/Coditas/'
              target='_blank'
              className={styles.IconContainer}
            >
              <FacebookIcon className={styles.Icons} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;  
