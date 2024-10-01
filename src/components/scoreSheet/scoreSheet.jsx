import React from "react";
import './index.css';
import ScoreTable from "./scoreTable";
import ScoreVariables from "./scoreVariables";

export default function ScoreSheet() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <ScoreTable tableIndex={1} columns={5} rows={6}>
        <ScoreVariables />
      </ScoreTable>
      <ScoreTable tableIndex={2} columns={5} rows={6}>
        <ScoreVariables finalScore/>
      </ScoreTable>
    </div>
  );
}
