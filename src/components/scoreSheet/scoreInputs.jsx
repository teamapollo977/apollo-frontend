import React from "react";
import { useFieldArray, Controller, useForm } from "react-hook-form";

function ScoreInputs({arrows, rounds, tableKey, setTotalXs, setTotalCumulative}) {

  const { control, watch } = useForm({
    defaultValues: {
      scores: Array(rounds).fill({ arrows: Array(arrows).fill(""), Xs: "" }),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "scores",
    },
  );

  const watchScores = watch("scores");

  const calculareRoundTotals = () => {
    return watchScores.map(round => 
      round.arrows.reduce((sum, value) => sum + Number(value || 0), 0)
    );
  }

  const calculateXsTotal = () => {
    const totalXs = watchScores.reduce((sum, round) => sum + Number(round.Xs || 0), 0);
    setTotalXs(totalXs);
    return totalXs;
  }

  const calculateCumulativeTotals = () => {
    const roundTotals = calculareRoundTotals();
    const cumulative = [];
    roundTotals.reduce((prevTotal, roundTotal, index) => {
      const currentTotal = prevTotal + roundTotal;
      cumulative[index] = currentTotal;
      return currentTotal;
    }, 0);
    setTotalCumulative(cumulative[5]);
    return cumulative;
  }

  return (
    <>
      {fields.map((round, rowIndex) => (
        <>
          {round.arrows.map((_, colIndex) => (
            <Controller
              key={`s-${rowIndex}-${colIndex}-${tableKey}`}
              name={`scores.${rowIndex}.arrows.${colIndex}`}
              control={control}
              render={({ field }) =>
                <input
                  {...field}
                  type="number"
                  min="0"
                  max="10"
                  style={{ gridArea: `s-${rowIndex}-${colIndex}` }}
                  className="bg-transparent"
                />
              }
            />
          ))}
          <Controller
            key={`Xs-${rowIndex}-${tableKey}`}
            name={`scores.${rowIndex}.Xs`}
            control={control}
            render={({ field }) =>
              <input
                {...field}
                type="number"
                min="0"
                max="5"
                style={{ gridArea: `s-${rowIndex}-x` }}
                className="bg-inverted-lighter"
              />}
          />
          <span
            key={`total-${rowIndex}-${tableKey}`}
            style={{ gridArea: `s-${rowIndex}-total` }}
          >
            {calculareRoundTotals()[rowIndex]}
          </span>
          <span 
            key={`cumulative-${rowIndex}-${tableKey}`}
            style={{ gridArea: `s-${rowIndex}-cumulative` }}
          >
            {calculateCumulativeTotals()[rowIndex]}
          </span>
        </>
      ))}

      <span style={{ gridArea: "total-x" }} className="total-x">{calculateXsTotal()}</span>
      <span style={{ gridArea: "score" }} className="score">{calculateCumulativeTotals()[5]}</span>
    </>
  );
}

export default React.memo(ScoreInputs);
