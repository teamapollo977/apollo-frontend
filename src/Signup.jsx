import { useState } from "react";
import AccountTypeSelector from "./components/accountTypeSelector"

function Signup() {
  const [selectedAccountType, setSelectedAccountType] = useState('archer')

  return (
    <>
      <main className="grid w-screen h-screen place-content-center">
        <div className="flex flex-col gap-10 items-center text-center w-fit">
          <h1 className="text-5xl font-semibold">I am an <span className="underline text-accent">{selectedAccountType}</span></h1>
          <div className="w-full flex justify-between items-center gap-10 text-center">
            <AccountTypeSelector text="Sign up as an individual" setAccountType={setSelectedAccountType} individual/>
            <AccountTypeSelector text="Sign up as an organization" setAccountType={setSelectedAccountType}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Signup;
