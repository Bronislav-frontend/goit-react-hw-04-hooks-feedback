import { Component } from 'react';

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositivePercentage() {
    const summFeedbacks = this.countTotalFeedback();
    const goodFeedbacksAmount = this.state.good;
    return Math.round((goodFeedbacksAmount * 100) / summFeedbacks);
  }

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const total = Object.keys(this.state);
    const percent = this.countPositivePercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={total}
            onFeedbackClick={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              positiveFeedbacks={percent}
            />
          )}

          {!totalFeedbacks && <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
}

export default App;
