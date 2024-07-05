import { mockFeedbacks } from '../../constants';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <div className={styles.cards}>
      {mockFeedbacks.map((feedback, index) => (
        <FeedbackCard feedback={feedback} key={feedback.author.nickName} isOdd={!!(index % 2)} />
      ))}
    </div>
  );
};

export default Cards;
