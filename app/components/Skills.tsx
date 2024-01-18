import React from "react"
import type { ProfileType } from "@/types"

type SkillsProps = {
  skills: ProfileType["skills"]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return <p>No skills information available.</p>
  }

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
        Skills
      </h2>
      <ul className="grid grid-cols-4 items-center gap-x-6 my-10">
        {skills.map((skill, id) => (
          <li
            key={id}
            className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
