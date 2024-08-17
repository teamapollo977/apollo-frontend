import React from 'react'
import { Link } from 'react-router-dom';

function AccountTypeSelector({text, club, setClubAccount, setSelecting, selecting}) {

  return (
    <Link
      to={`/signup/${club ? 'organization' : 'individual'}`}
      className={`grow hover:underline ${club ? 'organization' : 'individual'} hover:scale-110 transition ease-in-out duration-500 drop-shadow-md ${selecting && '[&:not(:hover)]:opacity-70 [&:not(:hover)]:scale-90 [&:not(:hover)]:blur-[1px]'}`}
      onPointerEnter={() => {
        setClubAccount(!club);
        setSelecting(true);
      }}
      onPointerLeave={() => {
        setClubAccount(!club);
        setSelecting(false);
      }}
      onFocus={() => setClubAccount(!club)}
      onFocusOut={() => setSelecting(false)}
    >
      {text}
    </Link>
  )
}

export default AccountTypeSelector;
