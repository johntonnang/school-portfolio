import { PortableTextBlock } from "sanity"

export type ProfileType = {
  _id: string
  headline: string
  description: string
  profileImage: {
    image: string
    alt: string
  }
  experience: {
    _key: string
    title: string
    role: string
    startDate: {
      selectDate: string
    }
    endDate: {
      selectDate: string
    }
    description: string
    techStack: string[]
    socialLinks: {
      linkedin: string
      website: string
    }
  }[]
  education: {
    _key: string
    school: string
    degree: string
    subjectArea: string
    startDate: {
      selectDate: string
    }
    endDate: {
      selectDate: string
    }
    description: string
    courses: string[]
  }[]
  skills: string[]
}

export type AboutType = {
  _id: string
  fullName: string
  profileImage: {
    alt: string
    image: string
  }
  email: string
  number: string
  location: string
  shortBio: string
  fullBio: PortableTextBlock[]
  hobbies: {
    _key: string
    hobbyTitle: string
    hobbyDescription: string
  }[]
  resumeURL: string
  socialLinks: string[]
}

export type ProjectsType = {
  _id: string
  projectTitle: string
  projectImage: {
    image: string
    alt: string
  }[]
  description: string
  techStack: string[]
  skills: string[]
  url: string
}
