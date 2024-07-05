import { achievements } from '../../constants';
import { TAchievement } from '../../types';
import styles from './Achievements.module.scss';

interface AchievmentProps {
  achievement: TAchievement;
}

const Achievement = ({ achievement }: AchievmentProps) => {
  return (
    <div className={styles.achievement}>
      <span className={styles.score}>{achievement.score}</span>
      <span className={styles.name}>{achievement.name}</span>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      {achievements.map((achievement) => (
        <Achievement achievement={achievement} key={achievement.name} />
      ))}
    </div>
  );
};

export default Achievements;
