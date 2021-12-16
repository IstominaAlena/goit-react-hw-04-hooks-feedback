import { useState } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

import './styles/App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonsOption = ['good', 'neutral', 'bad'];

  const handleClick = option => {
    switch (option) {
      case buttonsOption[0]:
        setGood(prev => prev + 1);
        break;
      case buttonsOption[1]:
        setNeutral(prev => prev + 1);
        break;
      case buttonsOption[2]:
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
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
