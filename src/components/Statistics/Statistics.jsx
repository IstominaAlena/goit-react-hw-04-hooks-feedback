import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, bad, neutral, total, percentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        Good:
        <span className={styles.value}>{good}</span>
      </li>
      <li className={styles.item}>
        Neutral:
        <span className={styles.value}>{neutral}</span>
      </li>
      <li className={styles.item}>
        Bad:
        <span className={styles.value}>{bad}</span>
      </li>
      <li className={styles.item}>
        Total:
        <span className={styles.value}>{total}</span>
      </li>
      <li className={styles.item}>
        Positive feedback:
        <span className={styles.value}>{total ? percentage : 0}%</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propType = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
