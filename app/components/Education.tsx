"use client"

import React, { useEffect, useState } from "react"
import type { ProfileType } from "@/types"

type EducationProps = {
  educations: ProfileType["education"]
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPosition = window.innerWidth < 768 ? 1400 : 1900

      setIsScrolled(scrollPosition > triggerPosition)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!educations || educations.length === 0) {
    return <p>No education information available.</p>
  }

  return (
    <div
      className={`px-6 py-12 md:p-12 lg:p-16 transition-colors duration-700 ${
        isScrolled ? "bg-background-light" : "bg-background-purple"
      }`}
    >
      <h2
        className={`text-3xl font-bold tracking-tight mb-6 leading-tight min-w-full dot md:text-4xl md:mb-12 md:mt-14 xl:text-6xl transition-colors duration-700 ${
          isScrolled ? "text-orange-dark" : "text-blue"
        }`}
      >
        Education
      </h2>
      <div className="flex flex-col gap-1">
        {educations.map((education, i) => (
          <div key={i}>
            <p
              className={`uppercase text-sm md:text-base xl:text-xl transition-colors duration-700 ${
                isScrolled ? "text-orange" : "text-blue"
              }`}
            >
              {education.startDate.selectDate} - {education.endDate.selectDate}
            </p>
            <h3
              className={`text-xl font-bold tracking-tight leading-tight min-w-full mb-2 dot md:text-3xl xl:text-4xl transition-colors duration-700 ${
                isScrolled ? "text-orange-dark" : "text-blue"
              }`}
            >
              {education.school}
            </h3>
            <p
              className={`xl:text-xl transition-colors duration-700 ${
                isScrolled ? "text-dark" : "text-light"
              }`}
            >
              {education.degree}
            </p>
            <p
              className={`mb-6 md:mb-12 xl:text-xl transition-colors duration-700 ${
                isScrolled ? "text-dark" : "text-light"
              }`}
            >
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
