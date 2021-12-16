import React, { Component } from 'react';

import Statistics from './components/Statistics';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';

import Section from './components/Section';

import './styles/App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonsOption = ['good', 'neutral', 'bad'];

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const good = this.state.good;
    const percentage = Math.round((good / totalFeedback) * 100);
    return percentage;
  };

  render() {
    const { countTotalFeedback, countPositiveFeedbackPercentage, handleClick, buttonsOption } =
      this;
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback();
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
  }
}

export default App;
