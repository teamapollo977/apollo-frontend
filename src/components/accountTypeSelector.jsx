import React from 'react'
import { Link } from 'react-router-dom';

function AccountTypeSelector({text, club, setClubAccount}) {

  return (
    <Link
      to={`/signup/${club ? 'organization' : 'individual'}`}
      className={`grow hover:underline ${club ? 'organization' : 'individual'} hover:scale-110 transition-transform ease-out duration-500`}
      onMouseEnter={() => setClubAccount(!club)}
    >
      {text}
    </Link>
  )
}

export default AccountTypeSelector;
