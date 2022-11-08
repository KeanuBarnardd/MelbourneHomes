import React from "react";
import "./Services.scss";
import { images } from "../../Constants";
import { useState, useEffect } from "react";
import { MortgageOutput } from "../../Components/index";
const Services = () => {
  // Input Values
  const [loanAmount, setLoanAmount] = useState(100); // Loan Amount
  const [interestRate, setInterestRate] = useState(1); // Interest Rates
  const [repaymentTerm, setRepaymentTerm] = useState(30); // Length of loan
  // Display Values
  const [mortageTotal, setMortageTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  const [displayText, setDisplayText] = useState("in Total");
  // Filters
  const [filterType, setFilterType] = useState("Total");
  const [filteredMortgage, setFilteredMortgage] = useState(0);
  const [filteredInterest, setFilteredInterest] = useState(0);
  // ----------- GET INPUT HANDLERS -----------
  const getLoanInputHandler = (e) => {
    setLoanAmount(parseFloat(e.target.value));
  };
  const getInterestInputHandler = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };
  const getTermHandler = (e) => {
    setRepaymentTerm(parseFloat(e.target.value));
  };
  const getFilterHandler = (e) => {
    setFilterType(e.target.value);
    filterAmount(filterType);
  };
  // ------------------------------------------

  useEffect(() => {
    filterAmount(filterType);
  });

  const calculateMortgage = (e) => {
    // Stop form from refreshing on Submit.
    e.preventDefault();
    setInterestRate(interestRate / 100);
    // Convert Interest Rate into two decimal places
    console.log(interestRate);
    // Calculate Daily
    setMortageTotal(loanAmount * interestRate + loanAmount);
    setInterestTotal(loanAmount * interestRate);
  };

  const filterAmount = (v) => {
    // Mortgage & Interest Values.
    let m = 0,
      i = 0,
      mT = mortageTotal,
      iT = interestTotal;
    if (v === "Total") {
      m = mT;
      i = iT;
      setDisplayText("in Total.");
    } else if (v === "Daily") {
      m = mT / repaymentTerm / 365;
      i = iT / repaymentTerm / 365;
      setDisplayText("daily.");
    } else if (v === "Weekly") {
      m = mT / repaymentTerm / 52;
      i = iT / repaymentTerm / 52;
      setDisplayText("weekly.");
    } else if (v === "Fortnightly") {
      m = mT / repaymentTerm / 26;
      i = iT / repaymentTerm / 26;
      setDisplayText("fortnightly.");
    } else if (v === "Monthly") {
      m = mT / repaymentTerm / 12;
      i = iT / repaymentTerm / 12;
      setDisplayText("monthly.");
    } else if (v === "Annually") {
      m = mT / repaymentTerm;
      i = iT / repaymentTerm;
      setDisplayText("annually.");
    } else {
      console.error(`FilteredType : ${v} Has no value `);
    }
    setFilteredInterest(i.toFixed(2));
    setFilteredMortgage(m.toFixed(2));
  };

  return (
    <div>
      <header
        className="header-small app__flex"
        style={{ backgroundImage: `url(${images.serviceHeader})` }}
      >
        <div className="app__container-width header-content">
          <h1>Our Services</h1>
          <p className="p-text">
            We have an array of services we provide with <span>Melbourne homes</span> that we hope
            will boost your chances of finding a new home or getting the information you need to
            make a decision. We have a mortgage calculator and articles to help in your home buying
            ventures.
          </p>
        </div>
      </header>
      <div className="page__content app__flex ">
        <div className="app__container-width">
          <h1 className="content__title-text">
            Mortgage <span>Calculator</span>
          </h1>
          <p className="p-text app__container-width">
            We’ve made it easy for you to better understand your finances with our handy
            <span> home loan calculator.</span> By working out your estimated loan amount, monthly
            repayments and upfront costs, you can enjoy the confidence of knowing what you can
            afford.
          </p>
        </div>

        <div className="mortgage__container app__container-width">
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
              <p>Interest Rate (%)</p>
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
            <button className="mortgage__button" onClick={calculateMortgage}>
              Calculate
            </button>
          </form>
          <MortgageOutput
            loanAmount={mortageTotal}
            selectType="Monthly"
            calculatedAmount={filteredMortgage}
            calculatedInterest={filteredInterest}
            loanDuration={repaymentTerm}
            totalInterest={interestRate}
            getFilterHandler={getFilterHandler}
            displayText={displayText}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
