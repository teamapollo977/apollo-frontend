import { useNavigate } from 'react-router-dom'

import { useTransform } from "framer-motion"
import { useMotionValue } from "framer-motion"
import { motion } from "framer-motion"

function MagneticButton({text}) {
  const navigate = useNavigate();

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

  const setTransform = (event, x, y) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 15);
    y.set(yRange * 15);
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useTransform(x, (latest) => latest * 0.5);
  const textY = useTransform(y, (latest) => latest * 0.5);

  return (
    <div
      className="relative px-28 py-20 rounded-[25%] mt-[-30px]"
      onPointerMove={(event) => setTransform(event, x, y)}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="bg-primary-light w-fit h-fit rounded-xl">
          <motion.div
            style={{ x, y }}
            className="bg-gradient-to-br from-secondary to-secondary-transparent w-fit h-fit rounded-xl transition-all ease-out duration-500"
          >
            <motion.button
              style={{ x, y }}
              className="w-max bg-gradient-to-br from-secondary-transparent to-accent px-6 py-3 rounded-xl transition-all text-accent-foreground font-bold text-2xl ease-out duration-500 shadow-xl"
              onClick={() => navigate("/signup")}
            >
              <motion.span
                style={{ x: textX, y: textY }}
                className="relative transition-all text-accent-foreground font-bold text-2xl ease-out duration-500 translate-x-8"
              >
                {text}
              </motion.span>
            </motion.button>
          </motion.div>
      </div>
    </div>
  )
}

export default MagneticButton
