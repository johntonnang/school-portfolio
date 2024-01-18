import Image from "next/image"
import BlockContent from "@sanity/block-content-to-react"
import type { AboutType } from "@/types"
import Link from "next/link"

type AboutProps = {
  data: AboutType
}

const About: React.FC<AboutProps> = ({ data }) => {
  if (!data) {
    return <p>No information available.</p>
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-between">
        <Image
          className="mb-6 min-h-96 rounded-full"
          src={data.profileImage.image}
          width={300}
          height={300}
          quality={100}
          alt={data.profileImage.alt}
        />
        <h2 className="text-3xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] dot md:text-4xl">
          {data.fullName}
        </h2>
      </div>
      <h3 className="text-xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot md:text-3xl">
        {data.shortBio}
      </h3>
      <div className="flex flex-col mb-6 after:mt-6 after:w-full after:h-1 after:bg-orange after:rounded-full">
        <BlockContent blocks={data.fullBio} />
      </div>
      <h4 className="text-3xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot md:text-4xl">
        Hobbies
      </h4>
      <>
        {data.hobbies.map((hobby, i) => (
          <div key={i} className="mb-6">
            <h5 className="text-xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot md:text-3xl">
              {hobby.hobbyTitle}
            </h5>
            <p>{hobby.hobbyDescription}</p>
          </div>
        ))}
      </>
      <div className="flex flex-col mb-6 before:w-full before:h-1 before:bg-orange before:rounded-full">
        <h4 className="text-2xl mt-6 text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot">
          Résumé
        </h4>
        <p>
          If you&#39;re interested you can download my résumé{" "}
          <Link href={data.resumeURL} className="underline">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default About
