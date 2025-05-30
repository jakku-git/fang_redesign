"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import Link from "next/link"
import { motion } from "framer-motion"

export function ThreeDCardDemo({
  title = "Premium Property Listings",
  description = "Showcase your properties with high-quality images, detailed descriptions, and premium placement",
  ctaText = "Learn more",
  imageSrc = "/placeholder.svg?height=1000&width=1000",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#A8B5E0]/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageSrc || "/placeholder.svg"}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="#"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {ctaText} →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#A8B5E0] text-white text-xs font-bold"
            >
              Get Started
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}

