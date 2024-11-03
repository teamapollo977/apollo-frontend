import { useState } from "react";
import { useAuth } from "./components/authProvider";
import { useEffect } from "react";
import { toast } from "sonner";

import Cancel from "@/assets/cancel";
import Confirm from "@/assets/confirm";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Skeleton } from "./components/ui/skeleton";

const headers = ["Name", "City", "District", "Actions"];
const fields = ["club_Name", "club_Location", "district"];

export default function PendingClubs() {
  const { authToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [pendingClubs, setPendingClubs] = useState([]);

  const getPendingClubs = async () => {
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/GetPendingClubs/Admin/Pending-Clubs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.ok) return response.json();
    }).then((data) => {
      setPendingClubs(data);
    }).catch((error) => {
      toast.error("There was an error fetching the pending clubs. Please try again.");
    }).finally(() => {
      setLoading(false);
    });
  };

  const approveClub = async (clubID) => {
    console.log("Approving club with ID: ", clubID);
    setLoading(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/ApproveRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        clubID: clubID,
      }),
    }).then((response) => {
      if (response.ok) toast.success("Club approved successfully");
    }).catch((error) => {
      toast.error("There was an error approving the club. Please try again.");
    }).finally(() => {
      getPendingClubs();
    });
  };

  const rejectClub = async (clubID) => {
    console.log("Rejecting club with ID: ", clubID);
    setLoading(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/RejectRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        clubID: clubID,
      }),
    }).then((response) => {
      if (response.ok) toast.success("Club rejected successfully");
    }).catch((error) => {
      toast.error("There was an error rejecting the club. Please try again.");
    }).finally(() => {
      getPendingClubs();
    });
  };

  useEffect(() => {
    getPendingClubs();
  }, []);

  if (!loading && !pendingClubs) {
    return (
      <span
        className="text-lg text-center text-foreground"
      >
        There are currently no pending clubs to be reviewed.
      </span>
    );
  }

  return (
    <div className="flex flex-col min-w-[75vw] gap-4 place-items-center p-4">
      <h1
        className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium"
      >Pending Clubs</h1>
      <div className={`grid grid-cols-[2fr_1fr_1fr_85px] gap-4 w-[1000px] max-w-full`}>
        <div className={`grid grid-cols-subgrid gap-4 col-span-4 font-bold p-4 border-b-2 border-inverted-medium`}>
          {headers.map((header) => (
            <span key={header}>{header}</span>
          ))}
        </div>
        {!loading ? pendingClubs?.map((item) => (
          <div className={`grid grid-cols-subgrid gap-4 col-span-4 border-2 border-transparent hover:border-primary-light rounded-md p-4`}>
            {fields.map((field) => (
              <span
                key={field}
                className="text-ellipsis overflow-hidden text-nowrap"
              >
                {item[field]}
              </span>
            ))}
            <div className="flex gap-4 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onClick={() => approveClub(item.clubId)}>
                    <Confirm/>
                  </TooltipTrigger>
                  <TooltipContent>Approve</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onClick={() => rejectClub(item.clubId)}>
                    <Cancel/>
                  </TooltipTrigger>
                  <TooltipContent>Reject</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )) : [...Array(2)].map((_, index) => (
            <Skeleton key={index} className={`w-[1000px] max-w-full h-16 col-span-4`} />
          ))
        }
      </div>
    </div>
  );
}
