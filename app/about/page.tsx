import { getAbout } from "@/sanity/sanity.query"
import type { AboutType } from "@/types"
import Menu from "../components/Menu"
import About from "../components/About"

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
      <main className="lg:p-16 p-6 pb-16 bg-background-light">
        <section className="flex flex-col items-start justify-between bg-background-light">
          <h1 className="text-4xl md:text-6xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot">
            About me
          </h1>
          {aboutData &&
            aboutData.map((data) => (
              <div key={data._id}>
                <About data={data} />
              </div>
            ))}
        </section>
      </main>
    </>
  )
}
