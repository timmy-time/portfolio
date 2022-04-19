import React from 'react';
// import react-router-dom
import { Link } from 'react-router-dom';
import styles from '../styles/Donate.module.css';


// show etherscan link
const showEtherscanLink = (address) => {
  if (address) {
    return (
      <a
        href={`https://etherscan.io/address/${address}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {address}
      </a>
    );
  }
  return null;
};

// show Donation Goal and Current Amount. use props.goal and props.currentamount. make sure props can be updated when data updates
const showDonationGoalAndCurrentAmount = (goal, currentamount) => {
  if (goal && currentamount) {
    return (
      <div className="donation-goal-and-current-amount">
        <span className="donation-goal">
          {goal} ETH
          <br />
          <span className="donation-goal-label">Donation Goal</span>
        </span>
        <br />
        <span className="donation-current-amount">
          {currentamount} ETH
          <br />
          <span className="donation-current-amount-label">
            Current Amount
          </span>
        </span>
      </div>
    );
  }
  return null;
};

function DonateThing() {
    return(
    <section id="donate">
        <div className="mx-auto flex align-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Donate</h1>
      <br />
        <p className="mb-8 leading-relaxed">
        If you would like to support the development of this website, you can
        donate to the following address.</p>
        <p className="mb-8 leading-relaxed">
        <span className="text-white">
          {showEtherscanLink(process.env.REACT_APP_ETHERSCAN_ADDRESS)}
        </span>
        </p>
      <p>
        <strong>
          <a
            href="https://etherscan.io/address/0x71A8b56837c609C77916e5164a127E34b7878fe5"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x71A8b56837c609C77916e5164a127E34b7878fe5
          </a>
        </strong>
      </p>
      {showDonationGoalAndCurrentAmount(
        '20',
        '0.00020'
      )}
      <p>
        Donations are not tax deductible.
      </p>
        </div>
      </div>
    </section>
    )
}

export default function Donate() {
  return (
      <div>
      <DonateThing />
      </div>
  )
}

