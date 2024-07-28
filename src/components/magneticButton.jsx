import { useMotionValue } from "framer-motion"
import { motion } from "framer-motion"

function MagneticButton({text}) {

  const mapRange = (
  inputLower,
  inputUpper,
  outputLower,
  outputUpper
  ) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower

    return (value) => outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const setTransform = (event, x, y, z, multiplier) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * multiplier);
    y.set(yRange * multiplier);
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0);

  return (
    <div
      className="relative px-28 py-20 rounded-[25%] mt-[-30px]"
      onPointerMove={(event) => setTransform(event, x, y, z, 15)}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
        z.set(0);
      }}
    >
      <div className="bg-secondary w-fit h-fit rounded-xl">
        <motion.div
          style={{ x, y, z }}
          className="bg-primary w-fit h-fit rounded-xl opacity-90 transition-all ease-out duration-500"
        >
          <motion.button
            style={{ x, y, z }}
            className="w-max bg-gradient-to-br from-secondary to-accent text-accent-foreground font-bold text-2xl px-6 py-3 rounded-xl transition-all ease-out duration-500 shadow-xl"
          >
            {text}
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default MagneticButton
