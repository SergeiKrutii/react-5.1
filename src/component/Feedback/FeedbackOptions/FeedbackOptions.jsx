import React from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";

const FeedbackOptions = ({ onLeaveFeedback, ...props }) => {
  return (
    <Section title={"Please leave feedback"}>
      {Object.keys(props).map((elem, i) => (
        <button
          key={`btn-${i}`}
          onClick={() => onLeaveFeedback(`${elem}`)}
          type="button"
          name={elem}
          className="button__stat"
        >
          {elem}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutural: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackOptions;
