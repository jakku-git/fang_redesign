"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
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

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-1000, 1000]),
    springConfig
  )

  // Form visibility based on scroll progress - adjusted to appear later
  const formOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])
  const formTranslateY = useTransform(scrollYProgress, [0.7, 0.8], [100, 0])

  return (
    <div
      ref={ref}
      className="h-[320vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
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
        className="fixed bottom-10 left-0 right-0 mx-auto max-w-5xl bg-white p-20 rounded-xl shadow-2xl z-50"
        style={{
          opacity: formOpacity,
          y: formTranslateY,
          display: useTransform(formOpacity, (v) => (v === 0 ? "none" : "block")),
        }}
      >
        <h3 className="text-5xl font-bold mb-8 text-center">Get Started Today</h3>
        <p className="text-2xl text-gray-600 mb-12 text-center">
          Sign up for a free trial with our advertising team
        </p>
        <div className="space-y-8">
          <div>
            <Input type="text" placeholder="Agency Name" className="w-full h-16 text-2xl" />
          </div>
          <div>
            <Input type="text" placeholder="Your Name" className="w-full h-16 text-2xl" />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" className="w-full h-16 text-2xl" />
          </div>
          <div>
            <Input type="tel" placeholder="Your Phone" className="w-full h-16 text-2xl" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-[#A8B5E0] hover:bg-[#B4CBF0] text-white h-20 text-2xl">Request a Call Back</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/logo.png"
          alt="FANG.com.au"
          width={500}
          height={200}
          className="w-auto h-24 md:h-32 mb-8 md:mb-12"
          priority
        />
        <h1 className="text-2xl md:text-8xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)]">
          Australia's Largest <br /> Chinese Real Estate Marketplace Platform
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl mt-8 text-white font-medium drop-shadow-lg [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)]">
          Connect with Australia's largest audience of active Chinese property seekers. Our premium advertising solutions help you
          showcase your properties and services to the right audience.
        </p>
      </motion.div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
        transition: { duration: 0.2 },
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl transition-all duration-300"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-300 group-hover/product:scale-105"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

