import React from "react";
import "./Services.scss";
import { images } from "../../Constants";
import { useState } from "react";
import { MortgageOutput } from "../../Components/index";
const Services = () => {
  // Input Values
  const [loanAmount, setLoanAmount] = useState(0); // Loan Amount
  const [interestRate, setInterestRate] = useState(4.8); // Interest Rates
  const [repaymentTerm, setRepaymentTerm] = useState(30); // Length of loan
  // Display Values
  const [mortageTotal, setMortageTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  // Filters
  const [filterType, setFilterType] = useState(["daily,weekly,monthly,annually,total"]);

  // ----------- GET INPUT HANDLERS -----------
  const getLoanInputHandler = (e) => {
    setLoanAmount(e.target.value);
    console.log(loanAmount);
  };

  const getInterestInputHandler = (e) => {
    setInterestRate(e.target.value);
    console.log(interestRate);
  };

  const getTermHandler = (e) => {
    setRepaymentTerm(e.target.value);
    console.log(repaymentTerm);
  };

  // ------------------------------------------

  const calculateMortgage = (e) => {
    // Stop form from refreshing on Submit.
    e.preventDefault();
    const p = loanAmount; // 100
    const r = loanAmount / interestRate / 365; //Example 0.4 / 10000 = 25000/ 365. R =
  };

  return (
    <>
      <header
        className="header-small app__flex"
        style={{ backgroundImage: `url(${images.serviceHeader})` }}
      >
        <div className="app__container-width header-content">
          <h1>Mortgage Calculator</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nesciunt! Nesciunt
            corrupti unde impedit error, officia aut. Corporis, a est necessitatibus dolorem,
            inventore error veritatis consequatur unde excepturi architecto suscipit.
          </p>
        </div>
      </header>
      <div className="page__content app__flex mortgage__container">
        <form className="app__container-width mortgage__input-form">
          {/* P = LOAN AMOUNT  */}
          <div className="form__input-container">
            <p>Loan Amount</p>
            <input
              onChange={getLoanInputHandler}
              type="text"
              name=""
              placeholder="Amount Borrowed"
              id=""
            />
          </div>
          <div className="form__input-container">
            <p>Interest Rate</p>
            {/* R = INTEREST RATE   */}
            <input onChange={getInterestInputHandler} type="text" placeholder="4.8%" />
          </div>
          <div className="form__input-container">
            <p>Repayment Term length</p>
            {/* T = NUMBER OF YEARS  */}
            <input
              onChange={getTermHandler}
              type="text"
              placeholder="Length of loan"
              max={40}
              min={0}
            />
          </div>
          <button className="mortgage__button" onClick={calculateMortgage}>Calculate</button>
        </form>
        <div className="mortgage__output-container"></div>
      </div>
    </>
  );
};

export default Services;
/*
Change the way this will be done 
- Enter the interest rate 
- Enter the Total Amount 
- Enter Length of the loan
---------------------------
- Calculate that value - and display the default monthly value. 
- Filter Select to change if its daily,weekly,monthly,quarterly,annually,total.
*/
