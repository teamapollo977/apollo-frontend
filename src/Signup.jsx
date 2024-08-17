import { useState } from "react";
import AccountTypeSelector from "./components/accountTypeSelector"
import AccountType from "./components/accountType";

function Signup() {
  const [clubAccount, setClubAccount] = useState(true);
  const [selectingAccountType, setSelectingAccountType] = useState(false);

  return (
    <>
      <main className="grid w-screen h-screen place-content-center">
        <div className="flex flex-col gap-12 items-center text-center w-fit">
          <AccountType club={clubAccount}/>
          <div className="w-fit flex justify-center gap-10 items-center text-center">
            <AccountTypeSelector
              text="Sign up as an individual"
              setClubAccount={setClubAccount}
              selecting={selectingAccountType}
              setSelecting={setSelectingAccountType}
              club
            />
            <AccountTypeSelector 
              text="Sign up as an organization" 
              setClubAccount={setClubAccount} 
              selecting={selectingAccountType} 
              setSelecting={setSelectingAccountType} 
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Signup;
