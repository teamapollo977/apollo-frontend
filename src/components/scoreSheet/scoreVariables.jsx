import React from "react";

export default function ScoreVariables({finalScore}) {
  return (
    <>
      <span style={{ gridArea: "s-1-1" }}>{}</span>
      <span style={{ gridArea: "s-1-2" }}>{}</span>
      <span style={{ gridArea: "s-1-3" }}>{}</span>
      <span style={{ gridArea: "s-1-4" }}>{}</span>
      <span style={{ gridArea: "s-1-5" }}>{}</span>
      <span style={{ gridArea: "s-1-x" }} className="bg-inverted-lighter">{}</span>
      <span style={{ gridArea: "s-1-total" }}>{}</span>
      <span style={{ gridArea: "s-1-cumulative" }}>{}</span>

      <span style={{ gridArea: "s-2-1" }}>{}</span>
      <span style={{ gridArea: "s-2-2" }}>{}</span>
      <span style={{ gridArea: "s-2-3" }}>{}</span>
      <span style={{ gridArea: "s-2-4" }}>{}</span>
      <span style={{ gridArea: "s-2-5" }}>{}</span>
      <span style={{ gridArea: "s-2-x" }} className="bg-inverted-lighter">{}</span>
      <span style={{ gridArea: "s-2-total" }}>{}</span>
      <span style={{ gridArea: "s-2-cumulative" }}>{}</span>
      
      <span style={{ gridArea: "s-3-1" }}>{}</span>
      <span style={{ gridArea: "s-3-2" }}>{}</span>
      <span style={{ gridArea: "s-3-3" }}>{}</span>
      <span style={{ gridArea: "s-3-4" }}>{}</span>
      <span style={{ gridArea: "s-3-5" }}>{}</span>
      <span style={{ gridArea: "s-3-x" }} className="bg-inverted-lighter">{}</span>
      <span style={{ gridArea: "s-3-total" }}>{}</span>
      <span style={{ gridArea: "s-3-cumulative" }}>{}</span>

      <span style={{ gridArea: "s-4-1" }}>{}</span>
      <span style={{ gridArea: "s-4-2" }}>{}</span>
      <span style={{ gridArea: "s-4-3" }}>{}</span>
      <span style={{ gridArea: "s-4-4" }}>{}</span>
      <span style={{ gridArea: "s-4-5" }}>{}</span>
      <span style={{ gridArea: "s-4-x" }} className="bg-inverted-lighter">{}</span>
      <span style={{ gridArea: "s-4-total" }}>{}</span>
      <span style={{ gridArea: "s-4-cumulative" }}>{}</span>

      <span style={{ gridArea: "s-5-1" }}>{}</span>
      <span style={{ gridArea: "s-5-2" }}>{}</span>
      <span style={{ gridArea: "s-5-3" }}>{}</span>
      <span style={{ gridArea: "s-5-4" }}>{}</span>
      <span style={{ gridArea: "s-5-5" }}>{}</span>
      <span style={{ gridArea: "s-5-x" }} className="bg-inverted-lighter">{}</span>
      <span style={{ gridArea: "s-5-total" }}>{}</span>
      <span style={{ gridArea: "s-5-cumulative" }}>{}</span>

      <span style={{ gridArea: "s-6-1" }}>{}</span>
      <span style={{ gridArea: "s-6-2" }}>{}</span>
      <span style={{ gridArea: "s-6-3" }}>{}</span>
      <span style={{ gridArea: "s-6-4" }}>{}</span>
      <span style={{ gridArea: "s-6-5" }}>{}</span>
      <span style={{ gridArea: "s-6-x" }} className="bg-inverted-lighter">{}</span>
      <span style={{ gridArea: "s-6-total" }}>{}</span>
      <span style={{ gridArea: "s-6-cumulative" }}>{}</span>

      <span style={{ gridArea: "total-x" }} className="total-x">{}</span>
      <span style={{ gridArea: "score" }} className="score">{}</span>

      {finalScore && <>
      <span style={{ gridArea: "final-footer" }} className="final-footer">ROUND TOTAL: (STANDARD UNIT 1 + STANDARD UNIT 2)</span>
        <span style={{ gridArea: "final-x" }} className="final-x">{}</span>
        <span style={{ gridArea: "final-score" }} className="final-score">{}</span>
      </>}
    </>
  );
}
