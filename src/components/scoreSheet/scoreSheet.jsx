import React, { useState } from "react";
import './index.css';
import ScoreTable from "./scoreTable";
import ScoreFinalResults from "./scoreFinalResults";
import ScoreInputs from "./scoreInputs";

function ScoreSheet() {
  const [firstTableXs, setFirstTableXs] = useState(0);
  const [firstTableCumulative, setFirstTableCumulative] = useState(0);
  const [secondTableXs, setSecondTableXs] = useState(0);
  const [secondTableCumulative, setSecondTableCumulative] = useState(0);

  return (
    <div className="flex flex-col gap-8 justify-center">
      <ScoreTable tableIndex={1} arrows={5} rounds={6}>
        <ScoreInputs
          arrows={5}
          rounds={6}
          tableKey={"firstTable"}
          totalXs={firstTableXs}
          setTotalXs={setFirstTableXs}
          totalCumulative={firstTableCumulative}
          setTotalCumulative={setFirstTableCumulative}
        />
      </ScoreTable>
      <ScoreTable tableIndex={2} arrows={5} rounds={6} >
        <ScoreInputs
          arrows={5}
          rounds={6}
          tableKey={"secondTable"}
          totalXs={secondTableXs}
          setTotalXs={setSecondTableXs}
          totalCumulative={secondTableCumulative}
          setTotalCumulative={setSecondTableCumulative}
        />
      </ScoreTable>
      <ScoreFinalResults
        totalXs={firstTableXs + secondTableXs}
        totalCumulative={firstTableCumulative + secondTableCumulative}
      />
    </div>
  );
}

export default React.memo(ScoreSheet);
