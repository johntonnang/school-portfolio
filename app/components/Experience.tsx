"use client"

import type { ProfileType } from "@/types"
import { useEffect, useState } from "react"

type ExperienceProps = {
  experiences: ProfileType["experience"]
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPosition = window.innerWidth < 768 ? 620 : 700
      const resetPosition = window.innerWidth < 768 ? 1400 : 1900

      if (scrollPosition > resetPosition) {
        setIsScrolled(false)
      } else {
        setIsScrolled(scrollPosition > triggerPosition)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const logoFill = isScrolled ? "#FCECBA" : "#ed6829"

  if (!experiences || experiences.length === 0) {
    return <p>No experience information available.</p>
  }

  return (
    <div
      className={`flex flex-col px-6 pt-12 after:mt-6 after:w-full after:h-1 after:rounded-full md:px-12 lg:px-16 xl:justify-evenly transition colors duration-700 ${
        isScrolled
          ? "bg-background-purple after:bg-blue"
          : "bg-background-light after:bg-orange"
      }`}
    >
      <h2
        className={`text-3xl font-bold tracking-tight mb-6 leading-tight min-w-full dot md:text-4xl md:mb-12 xl:text-6xl transition-colors duration-700 ${
          isScrolled ? "text-blue" : "text-orange-dark"
        }`}
      >
        Experience
      </h2>
      <>
        {experiences.map((experience, i) => (
          <div key={i} className="flex flex-col w-full gap-6 mb-12 md:flex-row">
            <div className="w-full md:w-3/4">
              <p
                className={`uppercase text-sm md:text-base xl:text-xl transition-colors duration-700 ${
                  isScrolled ? "text-blue" : "text-orange"
                }`}
              >
                {experience.startDate.selectDate} -{" "}
                {experience.endDate.selectDate}
              </p>
              <h3
                className={`text-xl font-bold tracking-tight leading-tight mb-2 dot md:text-3xl xl:text-4xl transition-colors duration-700 ${
                  isScrolled ? "text-blue" : "text-orange-dark"
                }`}
              >
                {experience.role} • {experience.title}
              </h3>
              <p
                className={`mb-2 text-sm md:text-base xl:text-xl transition-colors duration-700 ${
                  isScrolled ? "text-light" : "text-dark"
                }`}
              >
                {experience.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6 md:mb-12">
                {experience.techStack?.map((techStack, i) => (
                  <li
                    key={i}
                    className={`py-1 px-2 rounded-full text-xs md:text-sm transition-colors duration-700 ${
                      isScrolled ? "bg-blue text-dark" : "bg-orange text-light"
                    }`}
                  >
                    {techStack}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full relative flex items-center justify-center">
              {i < 2 && (
                <svg
                  className="w-[300px] md:w-[350px] lg:w-[400px]"
                  viewBox="0 0 858 429"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M429 344.78C454.707 344.78 479.838 337.158 501.214 322.878C522.59 308.598 539.252 288.3 549.095 264.552C558.937 240.803 561.517 214.67 556.509 189.455C551.501 164.24 539.13 141.076 520.959 122.891C502.788 104.707 479.634 92.3175 454.423 87.2901C429.212 82.2627 403.077 84.8229 379.32 94.6469C355.564 104.471 335.254 121.118 320.958 142.483C306.661 163.848 299.02 188.973 299 214.68C298.987 231.76 302.34 248.676 308.867 264.459C315.394 280.243 324.968 294.586 337.041 306.668C349.114 318.751 363.449 328.335 379.228 334.875C395.007 341.414 411.92 344.78 429 344.78ZM429 138.16C444.134 138.16 458.929 142.648 471.512 151.056C484.096 159.464 493.904 171.415 499.695 185.397C505.487 199.379 507.002 214.765 504.05 229.608C501.097 244.452 493.809 258.086 483.108 268.788C472.406 279.489 458.772 286.777 443.928 289.73C429.085 292.682 413.699 291.167 399.717 285.375C385.735 279.584 373.784 269.776 365.376 257.192C356.968 244.609 352.48 229.814 352.48 214.68C352.48 194.386 360.542 174.922 374.892 160.572C389.243 146.222 408.706 138.16 429 138.16Z"
                    fill={logoFill}
                    className="transition-all duration-700"
                  />
                  <path
                    d="M727.44 344.78C754.943 344.793 781.739 336.066 803.96 319.86V428.94H857.52V84.6H803.96V214.6C803.96 234.894 795.898 254.358 781.548 268.708C767.198 283.058 747.734 291.12 727.44 291.12C707.146 291.12 687.683 283.058 673.332 268.708C658.982 254.358 650.92 234.894 650.92 214.6V84.6H597.34V214.6C597.33 231.692 600.687 248.618 607.22 264.412C613.754 280.205 623.335 294.557 635.417 306.646C647.499 318.736 661.845 328.326 677.634 334.869C693.424 341.412 710.348 344.78 727.44 344.78Z"
                    fill={logoFill}
                    className="transition-all duration-700"
                  />
                  <path
                    d="M130.56 84.6C103.055 84.5778 76.2567 93.3052 54.04 109.52V0.420044H0.47998V344.78H54.04V214.68C54.04 194.386 62.1019 174.922 76.4522 160.572C90.8025 146.222 110.266 138.16 130.56 138.16C150.854 138.16 170.318 146.222 184.668 160.572C199.018 174.922 207.08 194.386 207.08 214.68V344.78H260.66V214.68C260.671 197.593 257.312 180.672 250.778 164.884C244.243 149.095 234.66 134.75 222.577 122.669C210.494 110.588 196.147 101.007 180.358 94.4746C164.569 87.9424 147.647 84.5869 130.56 84.6Z"
                    fill={logoFill}
                    className="transition-all duration-700"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </>
    </div>
  )
}

export default Experience
