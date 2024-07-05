import { TFeedback } from '../../types';
import styles from './FeedbackCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface FeedbackCardProps {
  feedback: TFeedback;
  isOdd: boolean;
}

const FeedbackCard = ({ feedback, isOdd }: FeedbackCardProps) => {
  const clx = cx({
    card: true,
    card_odd: isOdd,
  });

  return (
    <div className={clx}>
      <div className={styles.autor}>
        <img
          className={styles.avatar}
          src={feedback.author.avatar}
          alt={`${feedback.author.name}'s avatar`}
        />
        <div className={styles.contacts}>
          <p className={styles.name}>{feedback.author.name}</p>
          <p className={styles.nickname}>{feedback.author.nickName}</p>
        </div>
      </div>
      <p className={styles.message}>{feedback.message}</p>
    </div>
  );
};

export default FeedbackCard;
