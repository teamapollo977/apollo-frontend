export default function TargetCircle({size, color}) {
  return (
    <div
      style={{
        height: size,
        backgroundColor: `var(${color})`
      }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full grid place-content-center shadow-2xl [&:nth-child(1)]:blur-[4px] [&:nth-child(2)]:blur-[3px] [&:nth-child(3)]:blur-[2px]`}
    />
  )
}
