import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AccountTypeSelector({text, individual, setAccountType}) {

  return (
    <Link
      to={`/signup/${individual ? 'individual' : 'organization'}`}
      className={`grow hover:underline ${individual ? 'individual' : 'organization'}`}
      onMouseEnter={() => setAccountType(individual ? 'archer' : 'archery club')}
    >
      {text}
    </Link>
  )
}

export default AccountTypeSelector;
