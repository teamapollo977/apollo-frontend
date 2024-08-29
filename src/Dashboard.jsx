import DefaultButton from "./components/defaultButton";
import MagneticButton from "./components/magneticButton"

function Dashboard() {

  return (
    <div className="flex flex-col gap-5 items-center text-center w-min">
      <h2 className="text-3xl font-semibold min-w-max">Welcome back, Username!</h2>
      <h3 className="text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
      <DefaultButton classes="min-w-48 h-14 text-lg font-semibold">
        Start Shooting
      </DefaultButton>
    </div>
  )
}

export default Dashboard;
