import React from "react";
import "./MortgageOutput.scss";
import { useEffect, useState } from "react";

const MortgageOutput = ({
  loanAmount,
  selectType,
  calculatedAmount,
  totalInterest,
  calculatedInterest,
  loanDuration,
  getFilterHandler,
  displayText
}) => {
  return (
    <div className="mortgage__output">
      <div className="output__top">
        <div className="output__title">
          <p className="output__sub">Mortgage Total</p>
          <h1>$ {loanAmount}</h1>
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
        <h2>$ {calculatedAmount}</h2>
      </div>
      <div className="output__values">
        <p className="output__sub">How much you will pay in interest {displayText}</p>
        <h2> $ {calculatedInterest}</h2>
      </div>
      <p className="output__info">
        Over a <span>{loanDuration}</span> year period you will pay a total of
        <span> ${loanAmount}</span> at an interest rate of <span>{totalInterest}%</span>.
      </p>
    </div>
  );
};

export default MortgageOutput;
