import React, { memo } from "react";

function ScoreFinalResults({ totalXs, totalCumulative }) {

  return (
    <div className="score-final-results">
      <span style={{ gridArea: "final-footer" }} className="final-footer">ROUND TOTAL: (STANDARD UNIT 1 + STANDARD UNIT 2)</span>
      <span style={{ gridArea: "final-x" }} className="final-x">{totalXs}</span>
      <span style={{ gridArea: "final-score" }} className="final-score">{totalCumulative}</span>
    </div>
  );
}

export default memo(ScoreFinalResults);
