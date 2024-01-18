"use client"

import Image from "next/image"
import type { ProfileType } from "@/types"
import { useEffect, useState } from "react"

type HeroProps = {
  data: ProfileType
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPosition = window.innerWidth < 768 ? 620 : 700

      setIsScrolled(scrollPosition > triggerPosition)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!data) {
    return <p>No information available.</p>
  }

  return (
    <div
      className={`flex flex-col w-full px-6 pt-6 md:px-12 md:pt-12 md:flex-col-reverse md:h-[95vh] md:items-center lg:px-16 lg:pt-16 xl:h-[95vh] xl:flex-col xl:justify-start xl:items-center xl:after:mb-28 after:w-full after:h-1 after:rounded-full transition colors duration-700 ${
        isScrolled
          ? "bg-background-purple after:bg-blue"
          : "bg-background-light after:bg-orange"
      }`}
    >
      <div className="hidden xl:flex w-full h-full">
        <div className="xl:flex flex-col w-full h-full md:items-center md:justify-center xl:justify-evenly">
          <h1 className="text-3xl text-orange-dark font-bold tracking-tight mb-6 leading-tight dot md:text-6xl xl:text-9xl xl:mb-0">
            {data.headline}
          </h1>
          <h2 className="text-orange-dark font-bold tracking-tight text-xl mb-6 leading-tight dot md:text-2xl lg:text-4xl xl:mb-0">
            {data.description}
          </h2>
        </div>
        <div className="hidden mb-16 xl:flex w-full justify-center">
          <Image
            className="min-h-96 object-contain md:m-0"
            src={data.profileImage.image}
            width={400}
            height={400}
            quality={100}
            alt={data.profileImage.alt}
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full md:items-center md:justify-start md:mt-12 md:after:mt-16 md:after:w-full md:after:h-1 md:after:bg-orange md:after:rounded-full xl:hidden">
        <h1 className="text-3xl text-orange-dark font-bold tracking-tight mb-6 leading-tight dot md:text-6xl xl:text-9xl">
          {data.headline}
        </h1>
        <h2 className="text-orange-dark font-bold tracking-tight text-xl mb-6 leading-tight dot md:text-2xl xl:text-4xl">
          {data.description}
        </h2>
      </div>
      <Image
        className="mb-12 min-h-96 object-contain md:m-0 xl:hidden"
        src={data.profileImage.image}
        width={300}
        height={300}
        quality={100}
        alt={data.profileImage.alt}
      />
    </div>
  )
}

export default Hero
