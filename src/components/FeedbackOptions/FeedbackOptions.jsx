import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onFeedbackClick }) {
  return (
    <ul className={s.list}>
      {options.map((item, index) => (
        <li key={index}>
          <button
            type="button"
            className={`${s.btn} ${s[item]}`}
            value={item}
            onClick={e => {
              onFeedbackClick(e);
            }}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
