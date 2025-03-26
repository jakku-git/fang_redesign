"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    "rgb(168, 181, 224)", // #A8B5E0
    "rgb(180, 203, 240)", // #B4CBF0
    "rgb(193, 213, 240)", // #C1D5F0
    "rgb(200, 217, 240)", // #C8D9F0
    "rgb(213, 227, 240)", // #D5E3F0
  ]
  const linearGradients = [
    "linear-gradient(45deg, #A8B5E0 0%, #B4CBF0 100%), radial-gradient(circle at top left, #A8B5E0 0%, transparent 50%)",
    "linear-gradient(45deg, #B4CBF0 0%, #C1D5F0 100%), radial-gradient(circle at bottom right, #B4CBF0 0%, transparent 50%)",
    "linear-gradient(45deg, #C1D5F0 0%, #C8D9F0 100%), radial-gradient(circle at top right, #C1D5F0 0%, transparent 50%)",
    "linear-gradient(45deg, #C8D9F0 0%, #D5E3F0 100%), radial-gradient(circle at bottom left, #C8D9F0 0%, transparent 50%)",
    "linear-gradient(45deg, #D5E3F0 0%, #DAF0F7 100%), radial-gradient(circle at center, #D5E3F0 0%, transparent 50%)",
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 bg-gradient-to-br from-[#A8B5E0]/20 to-[#DAF0F7]/20"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-black dark:text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-black/80 dark:text-white/80"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ 
          background: backgroundGradient,
          backgroundBlendMode: "multiply",
          boxShadow: "0 0 40px rgba(168, 181, 224, 0.3)"
        }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block backdrop-blur-sm transition-all duration-500",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}

