import { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "./components/authProvider";

import Cancel from "@/assets/cancel";
import Confirm from "@/assets/confirm";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Skeleton } from "./components/ui/skeleton";

const headers = ["Affiliation", "Name", "Actions"];

export default function PendingUsers() {
  const { authToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [pendingUsers, setPendingUsers] = useState([]);

  const getPendingUsers = async () => {
    await fetch(import.meta.env.VITE_API_URL + "/api/Club/Pending-Members", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.ok) return response.json();
    }).then((data) => {
      setPendingUsers(data);
    }).catch((error) => {
      toast.error("There was an error fetching the pending users. Please try again.");
    }).finally(() => {
      setLoading(false);
    });
  };

  const approveUser = async (affiliationNumber) => {
    setLoading(true);
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
      if (response.ok) toast.success("User approved successfully");
    }).catch((error) => {
      toast.error("There was an error approving the user. Please try again.");
    }).finally(() => {
      getPendingUsers();
    });
  };

  const rejectUser = async (affiliationNumber) => {
    setLoading(true);
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
      if (response.ok) toast.success("User rejected successfully");
    }).catch((error) => {
      toast.error("There was an error rejecting the user. Please try again.");
    }).finally(() => {
      getPendingUsers();
    });
  };

  useEffect(() => {
    getPendingUsers();
  }, []);

  if (!loading && !pendingUsers) {
    return (
      <span
        className="text-lg text-center text-foreground"
      >
        There are currently no requests to join your club.
      </span>
    );
  }

  return (
    <div className="flex flex-col min-w-[75vw] gap-4 place-items-center p-4">
      <h1
        className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium"
      >Pending Users</h1>
      <div className={`grid grid-cols-[150px_1fr_85px] gap-4 w-[1000px] max-w-full`}>
        <div className={`grid grid-cols-subgrid gap-4 col-span-3 font-bold p-4 border-b-2 border-inverted-medium`}>
          {headers.map((header) => (
            <span key={header}>{header}</span>
          ))}
        </div>
        {!loading ? pendingUsers?.map((item) => (
          <div className={`grid grid-cols-subgrid gap-4 col-span-3 border-2 border-transparent hover:border-primary-light rounded-md p-4`}>
              <span className="text-ellipsis overflow-hidden text-nowrap">
                {item.affiliation_Number}
              </span>
              <span className="text-ellipsis overflow-hidden text-nowrap">
                {`${item.firstName} ${item.lastName}`}
              </span>
            <div className="flex gap-4 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onClick={() => approveUser(item.affiliation_Number)}>
                    <Confirm/>
                  </TooltipTrigger>
                  <TooltipContent>Approve</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onClick={() => rejectUser(item.affiliation_Number)}>
                    <Cancel/>
                  </TooltipTrigger>
                  <TooltipContent>Reject</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )) : [...Array(2)].map((_, index) => (
            <Skeleton key={index} className={`w-[1000px] max-w-full h-16 col-span-3`} />
          ))
        }
      </div>
    </div>
  );
}
