import styles from './StoreButtons.module.scss';

import google from '../../assets/images/google-play.svg';
import apple from '../../assets/images/app-store.svg';

interface StoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  storeIcon: string;
  storeName: string;
  storeText: string;
}

const StoreButton = ({ storeName, storeIcon, storeText }: StoreButtonProps) => {
  return (
    <button className={styles.storeButton}>
      <img className={styles.icon} src={storeIcon} alt={storeName} />
      <div className={styles.texts}>
        <span className={styles.text}>{storeText}</span>
        <span className={styles.name}>{storeName}</span>
      </div>
    </button>
  );
};

const storeButtonsData = [
  {
    storeIcon: google,
    storeName: 'Google play',
    storeText: 'get it on',
  },
  {
    storeIcon: apple,
    storeName: 'App Store',
    storeText: 'Available on the',
  },
];

const StoreButtons = () => {
  return (
    <div className={styles.buttons}>
      {storeButtonsData.map(({ storeIcon, storeName, storeText }) => (
        <StoreButton
          storeIcon={storeIcon}
          storeName={storeName}
          storeText={storeText}
          key={storeName}
        />
      ))}
    </div>
  );
};

export default StoreButtons;
