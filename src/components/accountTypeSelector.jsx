import React, { useState } from 'react'

function AccountTypeSelector({text, mirrored}) {

  return (
    <button className='grow hover:underline'>{text}</button>
  )
}

export default AccountTypeSelector;
