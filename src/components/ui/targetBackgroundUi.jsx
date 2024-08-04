import TargetCircle from "./targetCircle";

const targets = [{
  key: 0,
  size: [900, 600, 300],
  blur: true,
  position: "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
}, {
    key: 1,
    size: [600, 400, 200],
    blur: false,
    position: "bottom-36 right-0 translate-x-1/2 translate-y-1/2"
  }];

export default function TargetBackgroundUi() {
  return targets.map(target => (
    <div
      key={target.key}
      className={`fixed -z-10 ${target.position} ${target.blur ? "blur-md" : "blur-sm"}`}
    >
      <TargetCircle shadow size={`${target.size[0]}px`} color="--primary-light">
        <TargetCircle shadow size={`${target.size[1]}px`} color="--accent-light">
          <TargetCircle shadow size={`${target.size[2]}px`} color="--secondary-light">
          </TargetCircle>
        </TargetCircle>
      </TargetCircle>
    </div>
  ))
}
