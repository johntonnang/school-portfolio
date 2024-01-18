import { getProjects } from "@/sanity/sanity.query"

export default async function handler(req, res) {
  try {
    const projectsData = await getProjects()
    res.status(200).json(projectsData)
  } catch (error) {
    console.error("Error fetching projects:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
