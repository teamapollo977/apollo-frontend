import { useState } from "react";
import { useAuth } from "@/components/authProvider";
import { useEffect } from "react";
import Cancel from "@/assets/cancel";
import Confirm from "@/assets/confirm";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton";

export default function PendingTable({loading, emptyMessage, title, data, approve, reject, columns, gridCols, headers, fields, objectKey}) {
  const { authToken } = useAuth();

  if (!loading && !data) {
    return (
      <span
        className="text-lg text-center text-foreground"
      >
        {emptyMessage}
      </span>
    );
  }

  return (
    <div className="flex flex-col min-w-[75vw] gap-4 place-items-center p-4">
      <h1
        className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium"
      >{title}</h1>
      <div className={`grid ${gridCols} gap-4 w-[1000px] max-w-full`}>
        <div className={`grid grid-cols-subgrid gap-4 col-span-${columns} font-bold p-4 border-b-2 border-inverted-medium`}>
          {headers.map((header) => (
            <span>{header}</span>
          ))}
        </div>
        {!loading ? data?.map((item) => (
          <div className={`grid grid-cols-subgrid gap-4 col-span-${columns} border-2 border-transparent hover:border-primary-light rounded-md p-4`}>
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
                  <TooltipTrigger onClick={() => approve(item[objectKey])}>
                    <Confirm/>
                  </TooltipTrigger>
                  <TooltipContent>Approve</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onClick={() => reject(item[objectKey])}>
                    <Cancel/>
                  </TooltipTrigger>
                  <TooltipContent>Reject</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )) : [...Array(2)].map((_, index) => (
            <Skeleton key={index} className={`w-[1000px] max-w-full h-16 col-span-${columns}`} />
          ))
        }
      </div>
    </div>
  );
}
