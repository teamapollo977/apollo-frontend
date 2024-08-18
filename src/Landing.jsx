import MagneticButton from "./components/magneticButton"

function Landing() {

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-10 items-center text-center w-min">
        <h2 className="text-5xl font-semibold min-w-max">Value Proposition</h2>
        <h3 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
      </div>
      <MagneticButton text="Get Started"/>
    </div>
  )
}

export default Landing;
