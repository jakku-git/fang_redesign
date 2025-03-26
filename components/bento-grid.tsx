"use client"
import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"
import { IconBrandYoutubeFilled } from "@tabler/icons-react"
import Link from "next/link"

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Reach A New Audience",
      description:
        "Connect with active Chinese property seekers who are ready to make decisions. Our platform attracts serious buyers and renters.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "The Largest Chinese Audience",
      description:
        "Elevate your game by reaching the largest audience of Chinese property seekers.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Catch Us On YouTube",
      description:
        "Take a glance of how we promote handpicked properties to showcase to our audience.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Diversity is our strength",
      description:
        "Our platform bridges Australia's local expertise with a vibrant Chinese market, sparking innovation and unlocking new growth opportunities for agents.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
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
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <Image
            src="www.fang.com.au_.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=9Js0cB86tg4"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="9Js0cB86tg4-HQ.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  )
}

export const SkeletonTwo = () => {
  const platformStats = [
    {
      logo: "/fanglogo.png",
      stats: [
        { label: "Monthly Active Users", value: "1.4M+", change: "+12%" },
        { label: "Daily Page Views", value: "500K+", change: "+8%" },
        { label: "Avg. Session Duration", value: "8.5min", change: "+15%" },
        { label: "Engagement Rate", value: "32%", change: "+5%" }
      ]
    },
    {
      logo: "/todaylogo.png",
      stats: [
        { label: "Daily Readers", value: "800K+", change: "+10%" },
        { label: "Article Shares", value: "50K+", change: "+15%" },
        { label: "Content Reach", value: "2.1M+", change: "+20%" },
        { label: "User Growth", value: "25%", change: "+7%" }
      ]
    },
    {
      logo: "/wechatlogo.png",
      stats: [
        { label: "Followers", value: "600K+", change: "+18%" },
        { label: "Post Views", value: "300K+", change: "+12%" },
        { label: "Interaction Rate", value: "28%", change: "+9%" },
        { label: "Message Response", value: "95%", change: "+5%" }
      ]
    }
  ]

  return (
    <div className="relative flex flex-col p-4 h-full">
      {platformStats.map((platform, platformIdx) => (
        <div key={platform.logo} className="mb-8 last:mb-4">
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: platformIdx * 0.2 }}
            >
              <Image
                src={platform.logo}
                alt="Platform Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {platform.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ delay: (platformIdx * 4 + idx) * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-between cursor-pointer group relative min-h-[11rem]"
              >
                <motion.span 
                  className="text-base text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors font-medium"
                >
                  {stat.label}
                </motion.span>
                <div className="flex items-baseline gap-2 mt-3">
                  <motion.span 
                    className="text-2xl font-bold text-black dark:text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {stat.value}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, y: -2 }}
                    className="text-sm text-emerald-500 font-medium"
                  >
                    {stat.change}
                  </motion.span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 group-hover:opacity-100 opacity-0 transition-opacity rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  )
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Australia (Sydney)
        { location: [-33.8688, 151.2093], size: 0.1 },
        // China (Beijing)
        { location: [39.9042, 116.4074], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}


