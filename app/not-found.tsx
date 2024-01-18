"use client"
import { getAbout } from "@/sanity/sanity.query"
import type { AboutType } from "@/types"
import Menu from "./components/Menu"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Custom404() {
  const [aboutData, setAboutData] = useState<AboutType | null>(null)
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleSearch = () => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase()

    const routes = ["home", "about", "contact", "projects"]

    const matchingRoute = routes.find(
      (route) => route.toLowerCase() === lowerCasedSearchTerm
    )

    if (matchingRoute) {
      router.push(`/${matchingRoute}`)
    } else {
      console.log("No matching route found")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const aboutData = await getAbout()
      setAboutData(aboutData)
    }
    fetchData()
  }, [])

  return (
    <>
      {aboutData && (
        <Menu
          socials={aboutData.socialLinks}
          email={aboutData.email}
          number={aboutData.number}
        />
      )}
      <main className="bg-background-light w-full h-[100vh] p-6 lg:p-16">
        <section className="flex flex-col justify-center">
          <h1 className="text-3xl text-orange-dark font-bold tracking-tight mb-6 leading-tight md:mb-16 md:text-5xl xl:text-7xl">
            Sorry, that page doesn't exist. Try searching for a different route
          </h1>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-2 pl-4 rounded-full outline-none"
            />
            <button
              className="py-1 px-4 bg-orange text-light rounded-full text-xs md:text-sm"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
