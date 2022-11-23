import React from "react";
import "./MortgageOutput.scss";
import { useEffect, useState } from "react";

const MortgageOutput = ({
  loanAmount,
  calculatedAmount,
  totalInterest,
  calculatedInterest,
  loanDuration,
  getFilterHandler,
  displayText,
}) => {
  return (
    <div className="mortgage__output">
      <div className="output__top">
        <div className="output__title">
          <p className="output__sub">Mortgage Total</p>
          <h1>$ {loanAmount.toLocaleString("en-US")}</h1>
        </div>
        <select onChange={getFilterHandler} name="" id="">
          <option value="Total">Total</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Fortnightly">Fortnightly</option>
          <option value="Monthly">Monthly</option>
          <option value="Annually">Annually</option>
        </select>
      </div>
      <div className="output__values">
        <p className="output__sub">How much you will pay {displayText}</p>
        <h2>$ {isNaN(calculatedAmount) ? "0" : calculatedAmount.toLocaleString("en-US")}</h2>
      </div>
      <div className="output__values">
        <p className="output__sub">How much you will pay in interest {displayText}</p>
        <h2> $ {isNaN(calculatedInterest) ? "0" : calculatedInterest.toLocaleString("en-US")}</h2>
      </div>
      <p className="output__info">
        Over a <span>{isNaN(loanDuration) ? "0" : loanDuration.toLocaleString("en-US")}</span> year period you
        will pay a total of
        <span> ${loanAmount.toLocaleString("en-US")}</span> at an interest rate of <span>{totalInterest}%</span>.
      </p>
    </div>
  );
};

export default MortgageOutput;
