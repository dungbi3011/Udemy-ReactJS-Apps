import {useState} from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200, 
    expectedReturn: 6,
    duration: 10, 
  }); 

  const inputIsValid = userInputs.expectedReturn >= 0 && userInputs.duration >= 1;
  
  function handleChange(inputIdentifier, newValue) {
    setUserInputs(prevUserInput => { 
        return {
            ...prevUserInput, 
            [inputIdentifier]: +newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInputs} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid input data.</p>}
      {inputIsValid && <Results input={userInputs} />}
    </>
  );
}

export default App;
