import { getProfile } from "@/sanity/sanity.query"
import { getAbout } from "@/sanity/sanity.query"
import type { ProfileType } from "@/types"
import type { AboutType } from "@/types"
import Menu from "./components/Menu"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"

export default async function Home() {
  const profileData: ProfileType[] = await getProfile()
  const aboutData: AboutType[] = await getAbout()

  return (
    <>
      {aboutData && (
        <Menu
          socials={aboutData[0].socialLinks}
          email={aboutData[0].email}
          number={aboutData[0].number}
        />
      )}
      <main>
        <section className="flex flex-col">
          {profileData &&
            profileData.map((data) => (
              <div key={data._id}>
                <Hero data={data} />
                <Experience experiences={data.experience} />
                <Education educations={data.education} />
                {/* <Skills skills={data.skills} /> */}
              </div>
            ))}
        </section>
      </main>
    </>
  )
}
