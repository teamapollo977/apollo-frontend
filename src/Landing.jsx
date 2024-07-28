import Navbar from "./components/navbar"
import { Separator } from "@/components/ui/separator"

function Landing() {

  return (
    <>
      <Navbar/>
      <main className="grid w-screen h-screen place-content-center">
        <div className="flex flex-col gap-10 items-center text-center w-min">
          <h2 className="text-4xl font-semibold min-w-max">Value Proposition</h2>
            <h3 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <button className="w-fit bg-gradient-to-br from-secondary to-accent text-accent-foreground font-bold text-2xl px-4 py-2 rounded-xl my-4">Get Started</button>
        </div>
      </main>
    </>
  )
}

export default Landing
