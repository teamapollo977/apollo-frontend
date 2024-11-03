import { useState } from "react";
import { useAuth } from "./components/authProvider";
import { useEffect } from "react";

import PendingTable from "./components/PendingTable";

const headers = ["Affiliation", "Name", "Actions"];
const fields = ["affiliation_Number", "name"];

export default function PendingUsers() {
  const { authToken } = useAuth();
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [pendingUsers, setPendingUsers] = useState([]);

  const getPendingUsers = async () => {
    await fetch(import.meta.env.VITE_API_URL + "/api/Club/Pending-Members", {
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
      setPendingUsers(data);
    }).catch((error) => {
      throw new Error("There was an error fetching the pending users. Please try again.");
    }).finally(() => {
      setLoadingUsers(false);
    });
  };

  const approveUser = async (affiliationNumber) => {
    setLoadingUsers(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/ApproveUser/ApproveUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        affiliation_Number: affiliationNumber,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      setPendingUsers(data);
    }).catch((error) => {
      throw new Error("There was an error approving the user. Please try again.");
    }).finally(() => {
      getPendingUsers();
    });
  };

  const rejectUser = async (affiliationNumber) => {
    setLoadingUsers(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/RejectUser/RejectUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        affiliation_Number: affiliationNumber,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      setPendingUsers(data);
    }).catch((error) => {
      throw new Error("There was an error rejecting the user. Please try again.");
    }).finally(() => {
      getPendingUsers();
    });
  };

  useEffect(() => {
    getPendingUsers();
  }, []);

  return (
    <PendingTable
      loading={loadingUsers}
      emptyMessage="There are currently no requests to join your club."
      title="Pending Users"
      fields={fields}
      headers={headers}
      columns={3}
      data={pendingUsers?.map(user => ({...user, name: `${user.firstName} ${user.lastName}`}))}
      approve={approveUser}
      reject={rejectUser}
      objectKey="affiliation_Number"
      gridCols="grid-cols-[150px_1fr_85px]"
    />
  );
}
