import MagneticButton from "./components/magneticButton"

function Landing() {

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-10 items-center text-center w-min">
        <h2 className="text-5xl font-semibold min-w-max">Value Proposition</h2>
        <h3 className="text-md min-w-[550px]">“Archery is about focus, aim, and release. It’s a powerful metaphor for letting go and moving forward in life.”<br/><span className="font-semibold">― John Lee Dumas</span></h3>
      </div>
      <MagneticButton text="Get Started"/>
    </div>
  )
}

export default Landing;
