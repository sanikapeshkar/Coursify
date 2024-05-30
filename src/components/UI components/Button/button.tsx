import { ButtonProps } from "./Button.types";
import styles from './Button.module.scss';

const Button = ({ text, type, bgColor, handleClick }: ButtonProps) => {
  
  return (
    <button 
    className={`${styles.Button} 
    ${bgColor === 'success' 
    ? `${styles.Success}` 
    : bgColor === 'danger' 
    ? `${styles.Danger}` 
    : `${styles.Blue}`
    }`}
    type={type}
    onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;  
