import { useState } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

import './styles/App.css';

const buttonsOption = ['good', 'neutral', 'bad'];

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;

  const handleClick = option => {
    setState(prev => ({
      ...state,
      [option]: prev[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };
  const percentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions options={buttonsOption} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            total={total}
            neutral={neutral}
            bad={bad}
            good={good}
            percentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
