import { groq } from "next-sanity"
import client from "./sanity.client"

export async function getProfile() {
  try {
    return client.fetch(
      groq`*[_type == "profile"] {
      _id,
      headline,
      description,
      profileImage {alt, "image": asset->url},
      experience,
      education,
      skills,
    }`
    )
  } catch (error) {
    console.log({ message: "Error when fetching profile data." })
  }
}

export async function getAbout() {
  try {
    return client.fetch(
      groq`*[_type == "about"] {
      _id,
      fullName,
      profileImage {alt, "image": asset->url},
      email,
      number,
      location,
      shortBio,
      fullBio,
      hobbies,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
    }`
    )
  } catch (error) {
    console.log({ message: "Error when fetching about data." })
  }
}

export async function getProjects() {
  try {
    return client.fetch(
      groq`*[_type == "projects"] {
        _id,
        projectTitle,
        projectImage[]{
          "image": image.asset->url
        },
        description,
        techStack,
        url,
      }`
    )
  } catch (error) {
    console.log({ message: "Error when fetching projects data." })
  }
}

export async function getProjectByTitle(projectTitle: any) {
  try {
    return client.fetch(
      groq`*[_type == "projects" && projectTitle == $projectTitle][0] {
           _id,
           projectTitle,
          //  projectImage { alt, "image": asset->url },
          projectImage[] {
            alt,
            "image": image.asset->url,
        },
           description,
           techStack,
           url,
        }`,
      { projectTitle }
    )
  } catch (error) {
    console.error({ message: "Error when fetching project data by title." })
    return null
  }
}
