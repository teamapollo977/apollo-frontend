export default function TargetCircle({size, color, shadow, children}) {
  return (
    <div
      style={{
        height: size,
        backgroundColor: `var(${color})`
      }}
      className={`aspect-square rounded-full grid place-content-center shadow-2xl`}
    >
      {children}
    </div>
  )
}
