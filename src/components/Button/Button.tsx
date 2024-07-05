import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};

export default Button;
