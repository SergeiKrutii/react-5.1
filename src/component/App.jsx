import { useState, useEffect } from "react";

import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Statistics from "./Feedback/Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutural, setNeutural] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(good + neutural + bad);
  }, [bad, good, neutural]);

  const handleIncrement = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutural":
        setNeutural((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const positivePercentage = Math.round((good / total) * 100) || 0;

  return (
    <>
      <FeedbackOptions
        good={good}
        neutural={neutural}
        bad={bad}
        onLeaveFeedback={handleIncrement}
      />
      <Statistics
        good={good}
        neutural={neutural}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
};

export default App;
