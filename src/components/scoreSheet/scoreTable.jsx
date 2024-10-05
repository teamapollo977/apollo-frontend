import React from "react";
import './index.css';

export default function ScoreTable({children, tableIndex, arrows, rounds}) {

  const columnItems = Array(arrows).fill().map((_, i) => (
        <span key={i} style={{ gridArea: `col-${i + 1}` }}>{i + 1}</span>));

  const rowItems = Array(rounds).fill().map((_, i) => (
        <span key={i} style={{ gridArea: `row-${i + 1}` }}>{i + 1}</span>));


  return (
    <div className="score-table">
      <h3 style={{ gridArea: "title" }} className="score-table-title">{`STANDARD UNIT ${tableIndex}`}</h3>
      <h3 style={{ gridArea: "header" }}>ARROWS/SCORE</h3>
      <span style={{ gridArea: "end" }}>END</span>
      {columnItems}
      <span style={{ gridArea: "col-x" }} className="bg-inverted-lighter">Xs</span>
      <span style={{ gridArea: "total" }}>TOTAL</span>
      <span style={{ gridArea: "cumulative" }}>CUMULATIVE</span>
      {rowItems}
      {children}
      <span style={{ gridArea: "footer" }} className="footer">{`TOTAL STANDARD UNIT ${tableIndex}`}</span>
    </div>
  );
}
