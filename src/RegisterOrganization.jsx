import Navbar from "@/components/navbar"
import { Input } from "@/components/ui/input";

function RegisterOrganization() {

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
          <span>Name</span>
          <Input type="text" />
          <span>Address</span>
          <Input type="text" />
          <span>Registration</span>
          <Input type="text" />
          <span>Supervisor</span>
          <Input type="text" />
          <span>Phone Number</span>
          <Input type="tel" />
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

export default RegisterOrganization;
