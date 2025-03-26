"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig)

  // Form visibility based on scroll progress
  const formOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])

  const formTranslateY = useTransform(scrollYProgress, [0.7, 0.8], [100, 0])

  return (
    <div ref={ref} className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>

      {/* Sign-up form that appears near the end of the scroll */}
      <motion.div
        className="fixed bottom-10 left-0 right-0 mx-auto max-w-md bg-white p-8 rounded-xl shadow-2xl z-50"
        style={{
          opacity: formOpacity,
          y: formTranslateY,
          display: useTransform(formOpacity, (v) => (v === 0 ? "none" : "block")),
        }}
      >
        <h3 className="text-xl font-bold mb-4 text-center">Get Started Today</h3>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Sign up for a free consultation with our advertising team
        </p>
        <div className="space-y-4">
          <div>
            <Input type="text" placeholder="Your Name" className="w-full" />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" className="w-full" />
          </div>
          <div>
            <Input type="tel" placeholder="Your Phone" className="w-full" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-[#A8B5E0] hover:bg-[#B4CBF0] text-white">Request a Call Back</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Advertise With Us <br /> Reach Millions of Property Seekers
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Connect with Australia's largest audience of active property seekers. Our premium advertising solutions help you
        showcase your properties and services to the right audience.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: any
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
    </motion.div>
  )
}

