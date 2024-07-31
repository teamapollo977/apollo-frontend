import Navbar from "@/components/navbar"
import { Input } from "@/components/ui/input";

function RegisterIndividual() {

  // grid with a form to register user
  // labels should be a span placed at the left of the Input
  // placements should be made thtough grid
  // labels: First Name, Last Name, Date of Birth, Phone Number, Address, Email, Password, Confirm Password
  //
  return (
    <>
      <Navbar navigation/>
      <main className="grid w-screen h-screen place-content-center gap-5">
        <div className="grid grid-cols-2 gap-2">
          <span>First Name</span>
          <Input type="text" />
          <span>Last Name</span>
          <Input type="text" />
          <span>Date of Birth</span>
          <Input type="date" />
          <span>Phone Number</span>
          <Input type="tel" />
          <span>Address</span>
          <Input type="text" />
          <span>Email</span>
          <Input type="email" />
          <span>Password</span>
          <Input type="password" />
          <span>Confirm Password</span>
          <Input type="password" />
        </div>
        <button className="bg-inverted-background text-inverted-foreground text-xl px-4 py-2 rounded-lg">Register</button>
      </main>
    </>
  )
}

export default RegisterIndividual;
