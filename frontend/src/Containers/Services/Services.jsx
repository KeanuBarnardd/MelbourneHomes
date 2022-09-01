import React from "react";
import "./Services.scss";
import { images } from "../../Constants";
import { useState } from "react";

const Services = () => {
  // Input Values
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(4.8);
  const [repaymentTerm, setRepaymentTerm] = useState(30);
  const [repaymentFreq, setRepaymentFreq] = useState(12);
  // Display Values
  const [mortageTotal, setMortageTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  const [yearlyTotal, setYearlyTotal] = useState(0);

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

  const getFreqHandler = (e) => {
    setRepaymentFreq(e.target.value);
    console.log(repaymentFreq);
  };
  // ------------------------------------------

  const calculateMortgage = (e) => {
    // Stop form from refreshing on Submit.
    e.preventDefault();
    const p = loanAmount; // 100
    const r = loanAmount / interestRate / 365; //Example 0.4 / 10000 = 25000/ 365. R = 68.4 ( Interest Rate )
    const t = loanAmount / repaymentTerm; // 30
    const n = t / repaymentFreq; // 12
    // 300,000 / 30 / 12 = 833 per month
    let total = n + r;
    console.log(`Loan Amount(P) : ${p} InterestRate(R) : ${r} Term(T): ${t}  Freq: ${n}`);
    console.log(`Mortgage Total = ${total} per month`);
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
      <div className="page__content app__flex">
        <form className="app__container-width">
          {/* P = LOAN AMOUNT  */}
          <input
            onChange={getLoanInputHandler}
            type="text"
            name=""
            placeholder="Amount Borrowed"
            id=""
          />
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
              placeholder="4.8%"
              max={40}
              min={0}
              required
            />
          </div>
          <div className="form__input-container">
            <p>Repayment Frequency</p>
            {/* N = Number of payments per year  */}
            <select onChange={getFreqHandler} name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <button onClick={calculateMortgage}>Calculate</button>
        </form>
        <div className="mortgage__output-container">
          
        </div>
      </div>
    </>
  );
};

export default Services;
