"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import { Target } from "lucide-react";
import Target from "../assets/target.jsx";

export const Timeline = ({data}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div className="w-full">
      <div
        className="w-full font-sans md:px-10 mt-[20vh] mt-[20vh]"
        ref={containerRef}>
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
              <div
                className="sticky flex flex-col md:flex-row z-40 items-center top-1/2 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                    <Target/>
                </div>
                <h3
                  className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium">
                  {item.date}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full min-w-1/2 flex flex-end">
                <h3
                  className="md:hidden block text-2xl mb-4 text-left font-bold text-foreground">
                  {item.date}
                </h3>
                <div className="flex flex-col gap-8 justify-center min-w-[50vw] border-accent">
                  {item.content}{" "}

                  {item.title && 
                    <h4 className="text-4xl font-semibold text-foreground">{item.title}</h4>
                  }
                  {item.accumulative && 
                    <p className="text-foreground text-xl font-semibold">
                      {`Accumulative Score: ${item.accumulative}`}
                    </p>
                  }
                  {item?.values?.map(data => (
                    <p className="text-foreground text-xl font-normal">
                      {`${data.name}: ${data.value}`}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-accent via-secondary to-transparent from-[0%] via-[10%] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
