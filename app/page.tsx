"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HeroParallax } from "@/components/hero-parallax"
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "@/components/text-reveal-card"
import { ThreeDCardDemo } from "@/components/3d-cards"
import { StickyScroll } from "@/components/sticky-scroll-reveal"
import { FeaturesSectionDemo } from "@/components/bento-grid"
import { MacbookScroll } from "@/components/macbook-scroll"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ArrowRight, Building2, Users, BarChart3, Globe, Newspaper } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate background color based on scroll position
  const colors = ["#A8B5E0", "#B4CBF0", "#C1D5F0", "#C8D9F0", "#D5E3F0", "#DAF0F7"]
  const scrollHeight = typeof document !== "undefined" ? document.body.scrollHeight - window.innerHeight : 1000
  const scrollProgress = scrollY / scrollHeight

  // Interpolate between colors based on scroll position
  const getColorForProgress = (progress: number): string => {
    const numColors = colors.length
    const index = Math.min(Math.floor(progress * (numColors - 1)), numColors - 1)
    const nextIndex = Math.min(index + 1, numColors - 1)
    const colorProgress = (progress * (numColors - 1)) % 1

    const color1 = hexToRgb(colors[index])
    const color2 = hexToRgb(colors[nextIndex])

    // Smoother easing function for better transition
    const easeProgress = easeInOutSine(colorProgress)

    const r = Math.round(color1.r + (color2.r - color1.r) * easeProgress)
    const g = Math.round(color1.g + (color2.g - color1.g) * easeProgress)
    const b = Math.round(color1.b + (color2.b - color1.b) * easeProgress)

    return `rgb(${r}, ${g}, ${b})`
  }

  const backgroundColor = getColorForProgress(scrollProgress)

  // Hero parallax products
  const products = [
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/DJdqg0s.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/ufzAknJ.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/t7y2Ipw.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/b7J5fWp.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/PRWfd2c.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/9GZ82ov.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/qHYfPAG.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/QhkKrh0.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/rQdJMSk.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/eBpNLxx.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/7ZzRbIe.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/DJdqg0s.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/ufzAknJ.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/t7y2Ipw.png",
    },
    {
      title: "FANG.COM.AU",
      link: "#",
      thumbnail: "https://i.imgur.com/b7J5fWp.png",
    },
  ]

  // Sticky scroll content
  const stickyScrollContent = [
    {
      title: "Reach Your Target Audience",
      description:
        "Connect with active property seekers who are ready to make decisions. Our platform attracts serious buyers and renters looking for their next home.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-[#A8B5E0] to-[#B4CBF0] flex items-center justify-center text-white">
          <Users size={48} />
        </div>
      ),
    },
    {
      title: "Premium Visibility",
      description:
        "Stand out from the competition with premium placement options. Your listings will appear at the top of search results, increasing visibility and engagement.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-[#B4CBF0] to-[#C1D5F0] flex items-center justify-center text-white">
          <Building2 size={48} />
        </div>
      ),
    },
    {
      title: "Data-Driven Insights",
      description:
        "Access comprehensive analytics to track performance and optimize your advertising strategy. Make informed decisions based on real-time data.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-[#C1D5F0] to-[#C8D9F0] flex items-center justify-center text-white">
          <BarChart3 size={48} />
        </div>
      ),
    },
    {
      title: "Multi-Channel Promotion",
      description:
        "Extend your reach across multiple platforms. Your properties will be promoted on our website, mobile app, social media channels, and email newsletters.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-[#C8D9F0] to-[#D5E3F0] flex items-center justify-center text-white">
          <Globe size={48} />
        </div>
      ),
    },
    {
      title: "Content Marketing",
      description:
        "Showcase your expertise with sponsored content and featured articles. Build your brand and establish authority in the real estate market.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-[#D5E3F0] to-[#DAF0F7] flex items-center justify-center text-white">
          <Newspaper size={48} />
        </div>
      ),
    },
  ]

  return (
    <main className="min-h-screen font-inter" style={{ backgroundColor }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="FANG.com.au"
              width={350}
              height={150}
              className="h-8 w-auto"
              priority
            />
          </div>
          <div>
            <Button className="bg-[#A8B5E0] hover:bg-[#B4CBF0] text-white">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Hero Parallax */}
      <section className="pt-20">
        <HeroParallax products={products} />
      </section>

      {/* Combined Advertise With Us and CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Advertise With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach 1.4 million active potential Chinese property seekers with Australia's largest Chinese real estate platform
            </p>
          </div>
          <div className="flex justify-center mb-16">
            <TextRevealCard
              text="You Know The Business"
              revealText="We Know The People"
              className="w-full max-w-4xl"
            >
              <TextRevealCardTitle>Why advertise with FANG.com.au?</TextRevealCardTitle>
              <TextRevealCardDescription>
                With an audience size of over 1.4 million Chinese users in Australia, we
                connect you with serious buyers and renters actively looking for their next property.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to boost your property visibility?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful agents and property managers who trust FANG.COM.AU
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#A8B5E0] hover:bg-[#B4CBF0] text-white px-8 py-6 text-lg">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-[#A8B5E0] text-[#A8B5E0] hover:bg-[#A8B5E0] hover:text-white px-8 py-6 text-lg"
                >
                  View Pricing
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Card Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Advertising Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of premium advertising solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <ThreeDCardDemo
              title="Diverse Social Media Channels"
              description="Get your listing on our official social platforms such as WeChat, RED, and more"
              ctaText="Learn More"
              imageSrc="func1.webp"
            />
            <ThreeDCardDemo
              title="Comprehensize Search Results"
              description="Our Chinese users can get comprehensive data such as buyer reports, regional analyses, auction results, and more"
              ctaText="Get Featured"
              imageSrc="func2.webp"
            />
            <ThreeDCardDemo
              title="School Rankings"
              description="Features that matter to our audience. We present accurate school rankings in each listings."
              ctaText="See Options"
              imageSrc="func3.webp"
            />
            <ThreeDCardDemo
              title="Comprehensive Analytics"
              description="Detailed information for each properties that our audience cares about. Such as geographic location, planning information, potential risks and more."
              ctaText="Start Now"
              imageSrc="func4.webp"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Advertising Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect advertising solution for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-[90rem] mx-auto">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden transition-transform hover:scale-105 backdrop-blur-sm border-2 border-grey"
            >
              <div className="p-12 bg-gradient-to-br from-[#A8B5E0] to-[#B4CBF0]">
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Essential</h3>
                <div className="text-5xl font-bold text-white drop-shadow-lg">
                  $450<span className="text-xl font-normal">/listing</span>
                </div>
              </div>
              <div className="p-12">
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#A8B5E0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">2,500 impressions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#A8B5E0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Premium Property Listing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#A8B5E0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Weekly Performance Report</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#A8B5E0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Comprehensive Analytics</span>
                  </li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full mt-12 bg-gradient-to-r from-[#A8B5E0] via-[#B794F4] to-[#B4CBF0] hover:from-[#B4CBF0] hover:via-[#C4B5FD] hover:to-[#C1D5F0] text-white text-xl py-8 shadow-lg">Select Plan</Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden transform scale-105 z-10 border-4 border-grey backdrop-blur-sm"
            >
              <div className="p-12 bg-gradient-to-br from-[#B4CBF0] to-[#C1D5F0]">
                <div className="bg-white/95 text-[#B4CBF0] text-lg font-bold uppercase py-2 px-4 rounded-full inline-block mb-4 backdrop-blur-sm">
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Premium</h3>
                <div className="text-5xl font-bold text-white drop-shadow-lg">
                  $750<span className="text-xl font-normal">/month</span>
                </div>
              </div>
              <div className="p-12">
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#B4CBF0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">7,000 impressions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#B4CBF0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Featured Placement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#B4CBF0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">SydneyToday Feature Listing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#B4CBF0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Mobile Push Notification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#B4CBF0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Social Media Promotion (WeChat, RED, etc.)</span>
                  </li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full mt-12 bg-gradient-to-r from-[#B4CBF0] via-[#9F7AEA] to-[#C1D5F0] hover:from-[#C1D5F0] hover:via-[#B794F4] hover:to-[#C8D9F0] text-white text-xl py-8 shadow-lg">Select Plan</Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden transition-transform hover:scale-105 backdrop-blur-sm border-2 border-grey"
            >
              <div className="p-12 bg-gradient-to-br from-[#A8B5E0] to-[#B4CBF0]">
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Premium Plus</h3>
                <div className="text-5xl font-bold text-white drop-shadow-lg">
                  $1,250<span className="text-xl font-normal">/listing</span>
                </div>
              </div>
              <div className="p-12">
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#C1D5F0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">15,000 impressions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#C1D5F0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Headline Listing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#C1D5F0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Premium Social Media Boost</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#C1D5F0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Premium SydneyToday Feature Listing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#C1D5F0] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-xl text-gray-800">Premium Mobile Push Notification</span>
                  </li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full mt-12 bg-gradient-to-r from-[#A8B5E0] via-[#B794F4] to-[#B4CBF0] hover:from-[#B4CBF0] hover:via-[#C4B5FD] hover:to-[#C1D5F0] text-white text-xl py-8 shadow-lg">Select Plan</Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FeaturesSectionDemo />
        </div>
      </section>

      {/* MacBook Scroll Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Our Platform</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our intuitive dashboard helps you manage your advertising campaigns
            </p>
          </div>
          <div className="relative flex justify-center">
            <MacbookScroll
              src="page.png"
              title={
                <span>
                  POWERFUL TOOL FOR <br /> REAL ESTATE PROFESSIONALS
                </span>
              }
              showGradient={true}
            />
          </div>
        </div>
      </section>

      {/* Sticky Scroll Reveal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of advertising with Australia's leading real estate platform
            </p>
          </div>
          <StickyScroll content={stickyScrollContent} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-[#A8B5E0] to-[#B4CBF0]">
              <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-white/90">
                Have questions about our advertising options? Fill out the form below and our team will contact you.
              </p>
            </div>
            <div className="p-8 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-gray-300 focus:border-[#A8B5E0] focus:ring-[#A8B5E0]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="border-gray-300 focus:border-[#A8B5E0] focus:ring-[#A8B5E0]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Your company" className="border-gray-300 focus:border-[#A8B5E0] focus:ring-[#A8B5E0]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="How can we help you?" rows={4} className="border-gray-300 focus:border-[#A8B5E0] focus:ring-[#A8B5E0]" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-[#A8B5E0] hover:bg-[#B4CBF0] text-white font-medium">Submit</Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-black/80 max-w-2xl mx-auto">
            Join thousands of successful real estate professionals advertising on FANG.com.au
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
              Start Advertising Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">FANG.com.au</h3>
              <p className="text-gray-400">
                Australia's premier real estate platform connecting buyers, sellers, renters, and agents.
              </p>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Rent
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sell
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Market Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">1800 FANG AU</li>
                <li className="text-gray-400">info@fang.com.au</li>
                <li className="text-gray-400">123 Property Street, Sydney NSW 2000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 FANG.com.au. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove the hash if it exists
  hex = hex.replace("#", "")

  // Parse the hex values
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

// Smoother easing function for better transitions
function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2
}

