"use client"
import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Building2, BarChart3, Globe, Users } from "lucide-react"

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Reach Your Target Audience",
      description:
        "Connect with active property seekers who are ready to make decisions. Our platform attracts serious buyers and renters.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Premium Visibility",
      description:
        "Stand out from the competition with premium placement options. Your listings will appear at the top of search results.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Multi-Channel Promotion",
      description:
        "Extend your reach across multiple platforms. Your properties will be promoted on our website, mobile app, and social media.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Access comprehensive analytics to track performance and optimize your advertising strategy based on real-time data.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
        >
          Powerful Advertising Solutions
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
        >
          From premium listings to targeted campaigns, our advertising platform offers everything you need to showcase
          your properties to the right audience.
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <FeatureCard className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg"
      >
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="flex items-center justify-center h-full">
            <Users size={80} className="text-[#A8B5E0]" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg p-5"
      >
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <div className="flex items-center justify-center h-full">
            <Globe size={80} className="text-[#C1D5F0]" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg p-5"
      >
        <div className="flex items-center justify-center h-full">
          <Building2 size={80} className="text-[#B4CBF0]" />
        </div>
      </motion.div>
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center justify-center relative bg-transparent dark:bg-transparent">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg p-5"
      >
        <div className="flex items-center justify-center h-full">
          <BarChart3 size={80} className="text-[#C8D9F0]" />
        </div>
      </motion.div>
    </div>
  )
}

