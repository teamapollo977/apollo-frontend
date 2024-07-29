export default function TargetBackgroundUi() {
  return (
    <div className="absolute -z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[1200px] w-[1200px] rounded-full bg-inverted-light grid place-content-center blur-md">
    <div className="h-[900px] w-[900px] rounded-full bg-primary-light grid place-content-center">
    <div className="h-[600px] w-[600px] rounded-full bg-accent-light grid place-content-center">
    <div className="h-[300px] w-[300px] rounded-full bg-secondary-light grid place-content-center">
    </div>
    </div>
    </div>
    </div>
  )
}
