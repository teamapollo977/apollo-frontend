import { useNavigate } from "react-router-dom";
import { useAuth } from "./components/authProvider";
import DefaultButton from "./components/defaultButton";
import MagneticButton from "./components/magneticButton"

function Dashboard() {
  const navigate = useNavigate();
  const { userName } = useAuth();

  return (
    <div className="flex flex-col gap-5 items-center text-center w-min">
      <h2 className="text-3xl font-semibold min-w-max">{`Welcome${userName ? ", " + userName : " back"}!`}</h2>
      <h3 className="text-lg mb-5 min-w-[700px]">“The archer is the true weapon, the bow is just a long piece of wood.”<br/><span className="font-semibold">― Sebastien de Castell, Traitor's Blade</span></h3>
      <DefaultButton
        classes="min-w-48 h-14 text-lg font-semibold"
        onClick={() => navigate("/scoring")}
      >
        Start Shooting
      </DefaultButton>
    </div>
  )
}

export default Dashboard;
