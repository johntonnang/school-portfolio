import { getAbout } from "@/sanity/sanity.query"
import type { AboutType } from "@/types"
import Menu from "../components/Menu"
import Contact from "../components/Contact"

export default async function Home() {
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
      <main className="lg:p-16 p-6 bg-background-light h-[100vh]">
        <section className="flex flex-col items-start justify-between gap-x-12 lg:mt-32 mt-8 mb-16">
          {aboutData &&
            aboutData.map((data) => (
              <div key={data._id}>
                <Contact
                  socials={aboutData[0].socialLinks}
                  email={aboutData[0].email}
                  number={aboutData[0].number}
                />
              </div>
            ))}
        </section>
      </main>
    </>
  )
}
