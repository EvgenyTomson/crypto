import styles from './App.module.scss';
import Title from '../Title/Title';
import Cards from '../Cards/Cards';
import Button from '../Button/Button';
import Achievements from '../Achievements/Achievements';
import StoreButtons from '../StoreButtons/StoreButtons';

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <h2 className={styles.subTitle}>Subscribe to our channel to learn more</h2>
      <Cards />
      <Achievements />
      <Button>Join Whatsapp</Button>
      <StoreButtons />
    </div>
  );
}

export default App;
