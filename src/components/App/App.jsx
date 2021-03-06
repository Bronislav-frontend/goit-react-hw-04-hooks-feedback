import { useState } from 'react';

import {FEEDBACK_OPTIONS} from '../../data/state'

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleIncrement = ({target}) => {
    const value = target.value 

    switch(value) {
      case 'good': 
        setGood(prev => prev + 1)
        break
      case 'neutral': 
        setNeutral(prev => prev + 1)
        break
      case 'bad': 
        setBad(prev => prev + 1)
        break
      default:
        return
    }
  };

  const countTotalFeedback = () => good + bad + neutral;
  

  const countPositivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  }

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onFeedbackClick={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedbacks={countPositivePercentage()}
            />
          )}

          {!countTotalFeedback() && <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
