"use client"
import { getProjects, getAbout } from "@/sanity/sanity.query"
import type { ProjectsType, AboutType } from "@/types"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import { useEffect, useState } from "react"

export default function Home() {
  const [projectsData, setProjectsData] = useState<ProjectsType[]>([])
  const [aboutData, setAboutData] = useState<AboutType | null>(null)
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [searchResults, setSearchResults] = useState<ProjectsType[]>([])

  const handleToggleTech = (tech: string) => {
    setSelectedTechs((prevTechs) =>
      prevTechs.includes(tech)
        ? prevTechs.filter((selectedTech) => selectedTech !== tech)
        : [...prevTechs, tech]
    )
  }

  const handleSearch = () => {
    const results = projectsData.filter(
      (data) =>
        data.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.techStack.some((tech: string) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    setSearchResults(results)
  }

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const projectsData = await getProjects()
  //     const aboutData = await getAbout()
  //     setProjectsData(projectsData)
  //     setAboutData(aboutData)
  //   }

  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects")
        const projectsData = await response.json()
        setProjectsData(projectsData)

        const aboutData = await getAbout()
        setAboutData(aboutData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const uniqueTechStacks: string[] = projectsData.reduce(
    (uniqueTechs, category) => {
      category.techStack.forEach((tech) => {
        if (!uniqueTechs.includes(tech as string)) {
          uniqueTechs.push(tech as string)
        }
      })
      return uniqueTechs
    },
    [] as string[]
  )

  return (
    <>
      {aboutData && (
        <Menu
          socials={aboutData.socialLinks}
          email={aboutData.email}
          number={aboutData.number}
        />
      )}
      <main className="p-6 pb-16 md:p-16 bg-background-light">
        <h1 className="text-4xl md:text-6xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight">
          Projects
        </h1>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter title or tech.."
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
        <h2 className="text-2xl mb-4 md:text-4xl text-orange-dark font-bold tracking-tight lg:leading-[3.7rem] leading-tight">
          Filter on categories
        </h2>
        <div className="flex flex-wrap gap-4">
          {uniqueTechStacks.map((tech, j) => (
            <div key={j} className="flex flex-col mb-4 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={tech}
                  checked={selectedTechs.includes(tech)}
                  onChange={() => handleToggleTech(tech)}
                />
                <span className="ml-2 text-xs md:text-sm">{tech}</span>
              </label>
            </div>
          ))}
        </div>
        <section className="flex flex-col lg:gap-14">
          {searchTerm
            ? searchResults.map((data) => (
                <div key={data._id}>
                  <Projects data={data} />
                </div>
              ))
            : projectsData
                .filter((data) =>
                  selectedTechs.length === 0
                    ? true
                    : data.techStack.some((tech: string) =>
                        selectedTechs.includes(tech)
                      )
                )
                .map((data) => (
                  <div key={data._id}>
                    <Projects data={data} />
                  </div>
                ))}
        </section>
      </main>
    </>
  )
}
