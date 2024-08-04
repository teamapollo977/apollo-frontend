import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const accountTypes = [
  {
    name: 'archer',
    type: 'individual'
  },
  {
    name: 'archery club',
    individual: 'organization'
  }
]

function AccountTypeName() {

  return accountTypes.map(accountType => (
    <span
      key={accountType.name}
      className="underline text-accent "
    >
      {accountType.name}
    </span>
  ))
}

export default AccountTypeName;
