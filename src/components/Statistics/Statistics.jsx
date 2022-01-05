import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positiveFeedbacks }) {
  return (
    <ul>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total: {total} </li>
      <li>Positive feedback: {positiveFeedbacks}% </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
};

export default Statistics;