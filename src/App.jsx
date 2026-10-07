import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5.75,
    duration: 11,
  });

  const isDurationValid = userInput.duration >= 1;
  const isInitialInvestmentValid = !isNaN(userInput.initialInvestment);
  const isAnnualInvestmentValid = !isNaN(userInput.annualInvestment);
  const isExpectedReturnValid = !isNaN(userInput.expectedReturn);

  function handleChange(event) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [event.target.id]: parseFloat(event.target.value),
    }));
  }

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            id="initialInvestment"
            changeHandler={handleChange}
            value={userInput.initialInvestment}
          >
            Initial Investment
          </UserInput>
          <UserInput
            id="annualInvestment"
            changeHandler={handleChange}
            value={userInput.annualInvestment}
          >
            Annual Investment
          </UserInput>
        </div>
        <div className="input-group">
          <UserInput
            id="expectedReturn"
            changeHandler={handleChange}
            value={userInput.expectedReturn}
          >
            Expected Return
          </UserInput>
          <UserInput
            id="duration"
            changeHandler={handleChange}
            value={userInput.duration}
          >
            Duration
          </UserInput>
        </div>
      </section>
      {!isDurationValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {!isInitialInvestmentValid && (
        <p className="center">Please enter a valid initial investment amount</p>
      )}
      {!isAnnualInvestmentValid && (
        <p className="center">Please enter a valid annual investment amount</p>
      )}
      {!isExpectedReturnValid && (
        <p className="center">Please enter a valid expected return rate</p>
      )}
      {isDurationValid &&
        isInitialInvestmentValid &&
        isAnnualInvestmentValid &&
        isExpectedReturnValid && (
          <Result data={calculateInvestmentResults(userInput)} />
        )}
    </>
  );
}

export default App;
