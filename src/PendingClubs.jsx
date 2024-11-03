import { useState } from "react";
import { useAuth } from "./components/authProvider";
import { useEffect } from "react";

import PendingTable from "./components/PendingTable";

const headers = ["Name", "City", "District", "Actions"];
const fields = ["club_Name", "club_Location", "district"];

export default function PendingClubs() {
  const { authToken } = useAuth();
  const [loadingClubs, setLoadingClubs] = useState(true);
  const [pendingClubs, setPendingClubs] = useState([]);

  const getPendingClubs = async () => {
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/GetPendingClubs/Admin/Pending-Clubs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      setPendingClubs(data);
    }).catch((error) => {
      throw new Error("There was an error fetching the pending clubs. Please try again.");
    }).finally(() => {
      setLoadingClubs(false);
    });
  };

  const approveClub = async (clubID) => {
    console.log("Approving club with ID: ", clubID);
    setLoadingClubs(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/ApproveRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        clubID: clubID,
      }),
    }).catch((error) => {
      throw new Error("There was an error approving the club. Please try again.");
    }).finally(() => {
      getPendingClubs();
    });
  };

  const rejectClub = async (clubID) => {
    console.log("Rejecting club with ID: ", clubID);
    setLoadingClubs(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/RejectRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        clubID: clubID,
      }),
    }).catch((error) => {
      throw new Error("There was an error rejecting the club. Please try again.");
    }).finally(() => {
      getPendingClubs();
    });
  };

  useEffect(() => {
    getPendingClubs();
  }, []);

  return (
    <PendingTable
      loading={loadingClubs}
      emptyMessage="There are currently no pending clubs to be reviewed."
      title="Pending Clubs"
      fields={fields}
      headers={headers}
      columns={4}
      data={pendingClubs}
      approve={approveClub}
      reject={rejectClub}
      objectKey="clubID"
      gridCols="grid-cols-[2fr_1fr_1fr_85px]"
    />
  );
}
