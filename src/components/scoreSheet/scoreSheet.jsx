import React, { useState } from "react";
import './index.css';
import ScoreTable from "./scoreTable";
import ScoreFinalResults from "./scoreFinalResults";
import ScoreInputs from "./scoreInputs";
import DefaultButton from "../defaultButton";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../authProvider";

function ScoreSheet() {
  const [firstTableScores, setFirstTableScores] = useState([]);
  const [secondTableScores, setSecondTableScores] = useState([]);
  const [firstTableXs, setFirstTableXs] = useState(0);
  const [firstTableCumulative, setFirstTableCumulative] = useState(0);
  const [secondTableXs, setSecondTableXs] = useState(0);
  const [secondTableCumulative, setSecondTableCumulative] = useState(0);

  const { authToken } = useAuth();

  const {
    handleSubmit,
  } = useForm();

  const handleSaveScores = async () => {
    const scores = firstTableScores.concat(secondTableScores);
    console.log(scores);
    const response = await fetch(import.meta.env.VITE_API_URL + "/api/Score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        scores: scores,
        targetID: 2,
        ends: 12,
        arrowShots: 5,
        distance: Array(60).fill(15)
      })
    });

    if (response.ok) {
      // Give feedback to the user
      window.alert('Scores saved successfully');
    } else {
      throw new Error('Failed to save scores');
    }

    return response.json();
  };

  // useEffect(() => {
  //   console.log(firstTableScores);
  //   console.log(secondTableScores);
  // }, [firstTableScores, secondTableScores]);
  //
  return (
    <form
      className="flex flex-col gap-6 justify-center"
      onSubmit={handleSubmit(handleSaveScores)}
    >
      <ScoreTable tableIndex={1} arrows={5} rounds={6}>
        <ScoreInputs
          arrows={5}
          rounds={6}
          tableKey={"firstTable"}
          // totalXs={firstTableXs}
          setTotalXs={setFirstTableXs}
          // totalCumulative={firstTableCumulative}
          setTotalCumulative={setFirstTableCumulative}
          setScores={setFirstTableScores}
        />
      </ScoreTable>
      <ScoreTable tableIndex={2} arrows={5} rounds={6} >
        <ScoreInputs
          arrows={5}
          rounds={6}
          tableKey={"secondTable"}
          // totalXs={secondTableXs}
          setTotalXs={setSecondTableXs}
          // totalCumulative={secondTableCumulative}
          setTotalCumulative={setSecondTableCumulative}
          setScores={setSecondTableScores}
        />
      </ScoreTable>
      <ScoreFinalResults
        totalXs={firstTableXs + secondTableXs}
        totalCumulative={firstTableCumulative + secondTableCumulative}
      />
      <div className="flex justify-center align-center items-center">
        <DefaultButton
          classes="min-w-48 min-h-10 text-lg font-semibold align-center"
        >
          Save Scores
        </DefaultButton>
      </div>
    </form>
  );
}

export default React.memo(ScoreSheet);
