import { defineField } from "sanity"
import { BiUser } from "react-icons/bi"

const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      title: "Project title",
      name: "projectTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "projectImage",
      title: "Project Image",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Upload a project picture",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 4,
    },
    {
      title: "Tech stack used for the project",
      name: "techStack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "URL to the project",
      name: "url",
      type: "url",
    },
  ],
}

export default projects
