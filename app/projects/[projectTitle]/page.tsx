"use client"
import { getProjectByTitle } from "@/sanity/sanity.query"
import { getAbout } from "@/sanity/sanity.query"
import type { ProjectsType } from "@/types"
import type { AboutType } from "@/types"
import { useEffect, useState } from "react"
import Menu from "../../components/Menu"
import Image from "next/image"
import Link from "next/link"

type ProjectProps = {
  projectData: ProjectsType
}

export default function Project({
  params,
}: {
  params: { projectTitle: string }
}) {
  const { projectTitle } = params
  const [projectData, setProjectData] = useState<ProjectsType | null>(null)
  const [aboutData, setAboutData] = useState<AboutType | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectByTitle(projectTitle)
        setProjectData(data)

        const aboutData = await getAbout()
        setAboutData(aboutData[0])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [projectTitle])

  return (
    <>
      {aboutData && (
        <Menu
          socials={aboutData.socialLinks}
          email={aboutData.email}
          number={aboutData.number}
        />
      )}
      {projectData ? (
        <div className="flex flex-col gap-4 w-full p-6 pb-24 bg-background-light md:p-16 h-full">
          <h1 className="text-4xl md:text-6xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight">
            {projectData.projectTitle}
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between">
            {projectData.projectImage.map((image, i) => (
              <Image
                key={i}
                src={image.image}
                alt={image.alt}
                width={400}
                height={400}
              />
            ))}
          </div>
          <ul className="flex flex-wrap gap-2 z-10">
            {projectData.techStack.map((techStack, i) => (
              <li
                key={i}
                className="py-1 px-2 bg-orange text-light rounded-full text-xs md:text-sm"
              >
                {techStack}
              </li>
            ))}
          </ul>
          <p className="mb-6 md:text-lg">{projectData.description}</p>
          <p>
            Click{" "}
            <Link
              target="_blank"
              href={`${projectData.url}`}
              className="underline md:text-lg"
            >
              here
            </Link>{" "}
            to see the live project.
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
