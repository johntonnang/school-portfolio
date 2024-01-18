import type { AboutType } from "@/types"
import Link from "next/link"

type ContactProps = {
  socials: AboutType["socialLinks"]
  email: string
  number: string
}

const Contact: React.FC<ContactProps> = ({ socials, email, number }) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-4xl md:text-6xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot">
        Contact me
      </h1>
      <ul className="flex gap-4">
        <li key={email}>
          <Link
            href={`mailto:${email}`}
            className="link capitalize font-semibold text-decoration-none text-lg md:text-2xl "
          >
            Email
          </Link>
        </li>
        <li key={number}>
          <Link
            href={`tel:${number}`}
            className="link capitalize font-semibold text-decoration-none text-lg md:text-2xl "
          >
            Phone
          </Link>
        </li>
      </ul>
      <h2 className="text-4xl md:text-6xl text-orange-dark font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full dot">
        You can also reach me on my social links
      </h2>
      <ul className="flex gap-4">
        {Object.entries(socials).map(([platform, url], id, array) => (
          <li key={id}>
            <Link
              href={url}
              className="link capitalize font-semibold text-decoration-none text-lg md:text-2xl "
            >
              {platform}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact
