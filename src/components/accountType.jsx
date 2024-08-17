import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AccountType({club}) {

  return (
    <h1 className="inline-block text-5xl font-semibold text-center align-top leading-normal">
      <span className="opacity-80">
        {"I am an "}
      </span>
      <span className="text-nowrap nowrap text-accent no-underline bg-gradient-to-r to-accent via-secondary from-transparent bg-[length:100%_2px] bg-no-repeat bg-left-bottom">
        {"archer"}
        <span
          tabIndex={-1}
          className={`inline-block nowrap text-nowrap align-top overflow-x-hidden transition-[max-width] duration-700 no-underline ${club ? 'ease-in max-w-full' : 'ease-out max-w-0'}`}
        >
          {"y club"}
        </span>
      </span>
    </h1>
  )
}

export default AccountType;
