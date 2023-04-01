import React from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutural, bad, total, positivePercentage }) => {
  return (
    <Section title={"Statistics"}>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutural}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutural: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
