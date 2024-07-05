import styles from './Title.module.scss';

const Title = () => {
  return (
    <h1 className={styles.title}>
      Do you want to Learn more About cryptocurrencies{' '}
      <span className={styles.title_gradiented}>quickly and easily&nbsp;?</span>
    </h1>
  );
};

export default Title;
