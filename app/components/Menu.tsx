"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import type { AboutType } from "@/types"
import { useMenu } from "../context/MenuContext"
import { useRouter } from "next/navigation"

type MenuProps = {
  socials: AboutType["socialLinks"]
  email: string
  number: string
}
const Menu: React.FC<MenuProps> = ({ socials, email, number }) => {
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

  const { isOpen, toggleMenu } = useMenu()
  const router = useRouter()

  useEffect(() => {
    const slideUp = document.querySelectorAll(
      ".slide-up"
    ) as NodeListOf<HTMLElement>

    slideUp.forEach((slideUp, index) => {
      slideUp.style.transitionDelay = isOpen ? `${0.5 + index * 0.1}s` : "0s"
    })

    document.body.classList.toggle("menu-open", isOpen)

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isOpen])

  const handleNavigation = async (path: string) => {
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          toggleMenu((error: any) => {
            if (error) {
              reject(error)
            } else {
              resolve()
            }
          })
        }, 500)
      })

      router.push(path)
    } catch (error) {
      console.log(`Error navigating to ${path}:`, error)
    }
  }

  return (
    <nav className="flex items-center justify-start">
      <button
        onClick={toggleMenu}
        className={`bottom-6 left-1/2 transform -translate-x-1/2 fixed text-white focus:outline-none rounded-full border-2 h-[50px] w-[50px] items-center z-[60] transition-colors duration-700 ${
          isScrolled
            ? "bg-light-blue border-background-purple"
            : "bg-orange border-background-light"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-1 justify-center transition-all duration-300 ${
            isOpen ? "-translate-x-[2.5px]" : ""
          }`}
        >
          <span
            className={`inline-block h-[2px] w-[21px] rounded-full transition-all duration-300 ${
              isOpen ? "rotate-left" : ""
            } ${isScrolled ? "bg-background-purple" : "bg-light"}`}
          ></span>

          <span
            className={`h-[2px] w-5 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }  ${isScrolled ? "bg-background-purple" : "bg-light"}`}
          ></span>
          <span
            className={`h-[2px] w-[21px] rounded-full transition-all duration-300 ${
              isOpen ? "rotate-right" : ""
            }  ${isScrolled ? "bg-background-purple" : "bg-light"}`}
          ></span>
        </div>
      </button>
      <div
        className={`h-12 w-12 fixed bottom-6 left-1/2 transform -translate-x-1/2 rounded-full z-20 ${
          isScrolled ? "bg-light-blue" : "bg-orange"
        }`}
        style={{
          transition: "transform 1s ease-in-out",
          transform: isOpen ? "scale(60)" : "",
        }}
      ></div>
      <div
        className={`gap-4 ${
          isOpen ? "menu-open z-50" : "opacity-0 -z-10"
        } p-6 flex flex-col fixed mt-8 inset-0 transition-all ease-in-out duration-1000`}
      >
        <div className="overflow-hidden h-16 relative md:h-24">
          <Link
            href="/"
            passHref
            onClick={() => handleNavigation("/")}
            className={`link slide-up font-semibold text-5xl absolute lg:text-7xl transition-colors duration-700 ${
              isScrolled ? "text-background-purple-tint" : "text-light"
            }`}
          >
            Home
            <span
              className={`text-sm md:text-lg transition-colors duration-700 ${
                isScrolled ? "text-background-purple" : "text-orange-dark"
              }`}
            >
              01
            </span>
          </Link>
        </div>
        <div className="overflow-hidden h-16 relative md:h-24">
          <Link
            href="/about"
            passHref
            onClick={() => handleNavigation("/")}
            className={`link slide-up font-semibold text-5xl absolute lg:text-7xl transition-colors duration-700 ${
              isScrolled ? "text-background-purple-tint" : "text-light"
            }`}
          >
            About
            <span
              className={`text-sm md:text-lg transition-colors duration-700 ${
                isScrolled ? "text-background-purple" : "text-orange-dark"
              }`}
            >
              02
            </span>
          </Link>
        </div>
        <div className="overflow-hidden h-16 relative mb-4 md:mb-12 md:h-24">
          <Link
            href="/projects"
            passHref
            onClick={() => handleNavigation("/")}
            className={`link slide-up font-semibold text-5xl absolute lg:text-7xl transition-colors duration-700 ${
              isScrolled ? "text-background-purple-tint" : "text-light"
            }`}
          >
            Projects
            <span
              className={`text-sm md:text-lg transition-colors duration-700 ${
                isScrolled ? "text-background-purple" : "text-orange-dark"
              }`}
            >
              03
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mb-4 md:w-1/2 md:mb-8"></div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="overflow-hidden h-14 relative">
            <Link
              href="/contact"
              passHref
              onClick={() => handleNavigation("/")}
              className={`slide-up link text-4xl font-semibold absolute md:text-5xl transition-colors duration-700 ${
                isScrolled ? "text-background-purple-tint" : "text-light"
              }`}
            >
              Contact
            </Link>
          </div>
          <ul className="grid grid-cols-3">
            <li
              key={email}
              className="overflow-hidden grid items-center w-full h-8 relative md:h-10"
            >
              <Link
                className={`link capitalize slide-up font-semibold absolute text-decoration-none justify-self-start text-lg md:text-2xl transition-colors duration-700 ${
                  isScrolled ? "text-background-purple-tint" : "text-light"
                }`}
                href={`mailto:${email}`}
              >
                Email
              </Link>
            </li>
            <li
              key={number}
              className="overflow-hidden grid items-center w-full h-8 relative md:h-10"
            >
              <Link
                className={`link capitalize slide-up font-semibold absolute text-decoration-none justify-self-center text-lg md:text-2xl transition-colors duration-700 ${
                  isScrolled ? "text-background-purple-tint" : "text-light"
                }`}
                href={`tel:${number}`}
              >
                Phone
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
