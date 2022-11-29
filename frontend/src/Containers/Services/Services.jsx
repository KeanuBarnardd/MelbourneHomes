import React from "react";
import "./Services.scss";
import { images } from "../../Constants";
import { useState, useEffect } from "react";
import { MortgageOutput } from "../../Components/index";
const Services = () => {
  // Input Values
  const [loanAmount, setLoanAmount] = useState(0); // Loan Amount
  const [interestRate, setInterestRate] = useState(0); // Interest Rates
  const [repaymentTerm, setRepaymentTerm] = useState(0); // Length of loan
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
    // setInterestRate(parseFloat(e.target.value));
    // const convertInterest = e.target.value / 100;
    setInterestRate(e.target.value / 100);
  };
  const getTermHandler = (e) => {
    setRepaymentTerm(parseFloat(e.target.value));
  };
  const getFilterHandler = (e) => {
    setFilterType(e.target.value);
    filterAmount(filterType);
  };

  useEffect(() => {
    filterAmount(filterType);
  });

  const calculateMortgage = (e) => {
    // Stop form from refreshing on Submit.
    e.preventDefault();
    setMortageTotal(loanAmount * interestRate + loanAmount);
    setInterestTotal(loanAmount * interestRate);

    // Reset all our Values back to 0
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

    setFilteredInterest(i);
    setFilteredMortgage(m);
  };

  return (
    <div>
      <header
        className="header-small app__flex"
        style={{ backgroundImage: `url(${images.serviceHeader})` }}
      >
        <div className="app__container-width header-content">
          <h1> Services</h1>
        </div>
      </header>
      <div className="page__content app__flex ">
        <div className="app__container-width">
          <div className="row">
            <div className="row__item">
              <h3 className="page__tag">Find out your mortgage</h3>
              <h1 className="head-text">Mortgage Calculator</h1>
            </div>
            <div className="row__item">
              <p className="p-text">
                Find the ideal property that is most suitable for you. Starting from houses for sale
                that are minimalist, apartments for sale that are exclusive.
              </p>
            </div>
          </div>
        </div>

        <div className="mortgage__container app__container-width">
          <form onSubmit={calculateMortgage} className="app__container-width mortgage__input-form">
            {/* P = LOAN AMOUNT  */}
            <div className="form__input-container">
              <p>Loan Amount</p>
              <input
                required
                onChange={getLoanInputHandler}
                type="number"
                name=""
                placeholder="Amount Borrowed"
                id=""
              />
            </div>
            <div className="form__input-container">
              <p>Interest Rate (%)</p>
              {/* R = INTEREST RATE   */}
              <input
                min={1}
                max={100}
                required
                onChange={getInterestInputHandler}
                type="number"
                placeholder="4.8%"
              />
            </div>
            <div className="form__input-container">
              <p>Repayment Term length</p>
              {/* T = NUMBER OF YEARS  */}
              <input
                required
                onChange={getTermHandler}
                type="number"
                placeholder="Length of loan"
                max={40}
                min={1}
              />
            </div>

            <button className="mortgage__button">Calculate</button>
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
