import type { ProjectsType } from "@/types"
import Image from "next/image"
import Link from "next/link"

type ProjectsProps = {
  data: ProjectsType
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  if (!data) {
    return <p>No information available.</p>
  }

  console.log(data.projectImage)

  return (
    <>
      <div className="w-full h-full mb-6 items-center">
        <div className="w-full h-52 p-4 rounded-lg relative mb-6 md:h-96">
          <Link
            href="/projects/[projectTitle]"
            as={`/projects/${data.projectTitle}`}
            passHref
          >
            <Image
              className="absolute rounded-lg brightness-[30%] object-cover"
              src={data.projectImage[0].image}
              alt={data.projectImage[0].alt}
              fill={true}
            />
            <div className="flex flex-col justify-end h-full gap-2">
              <h2 className="text-2xl text-light font-bold tracking-tight lg:leading-[3.7rem] leading-tight lg:min-w-[700px] dot md:text-4xl z-10">
                {data.projectTitle}
              </h2>
              <ul className="flex flex-wrap gap-2 z-10">
                {data.techStack.map((techStack, i) => (
                  <li
                    key={i}
                    className="py-1 px-2 bg-orange text-light rounded-full text-xs md:text-sm"
                  >
                    {techStack}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projects
