import Navbar from "./components/navbar"
import TargetBackgroundUi from "./components/ui/targetBackgroundUi"
import AccountTypeSelector from "./components/accountTypeSelector"

function Signup() {

  return (
    <>
      <Navbar navigation/>
      <main className="grid w-screen h-screen place-content-center">
        <div className="flex flex-col gap-10 items-center text-center w-fit">
          <h1 className="text-5xl font-semibold">I am an archer</h1>
          <div className="w-full flex justify-between items-center gap-10 text-center">
            <AccountTypeSelector text="Sign up as an individual"/>
            <AccountTypeSelector text="Sign up as an organization"/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Signup;
