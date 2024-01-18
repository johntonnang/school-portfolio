import { defineField } from "sanity"
import { BiUser } from "react-icons/bi"

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      title: "Headline",
      name: "headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      description: "List your experiences:",
      of: [
        {
          title: "Experience",
          type: "object",
          fields: [
            {
              title: "Workplace Title",
              type: "string",
              name: "title",
            },
            {
              title: "Role",
              type: "string",
              name: "role",
            },
            {
              title: "Start date",
              type: "object",
              name: "startDate",
              fields: [
                {
                  title: "Select date",
                  // type: "date",
                  type: "string",
                  name: "selectDate",
                },
              ],
            },
            {
              title: "End date",
              type: "object",
              name: "endDate",
              fields: [
                {
                  title: "Select date",
                  // type: "date",
                  type: "string",
                  name: "selectDate",
                },
              ],
            },
            {
              title: "Description",
              type: "text",
              name: "description",
            },
            {
              title: "Tech stack",
              type: "array",
              name: "techStack",
              of: [{ type: "string" }],
            },
            {
              name: "socialLinks",
              title: "Social Links",
              type: "object",
              description: "Add workplace website/social links:",
              fields: [
                {
                  name: "website",
                  title: "Website URL",
                  type: "url",
                },
                {
                  name: "linkedin",
                  title: "Linkedin URL",
                  type: "url",
                  initialValue: "https://linkedin.com/in/",
                },
                {
                  name: "github",
                  title: "Github URL",
                  type: "url",
                  initialValue: "https://github.com/",
                },
                {
                  name: "instagram",
                  title: "Instagram URL",
                  type: "url",
                  initialValue: "https://instagram.com/",
                },
              ],
              options: {
                collapsed: false,
                collapsible: true,
                columns: 2,
              },
            },
          ],
        },
      ],
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      description: "List your educations:",
      of: [
        {
          title: "Education",
          type: "object",
          fields: [
            {
              title: "School",
              name: "school",
              type: "string",
            },
            {
              title: "Degree",
              name: "degree",
              type: "string",
            },
            {
              title: "Subject area",
              name: "subjectArea",
              type: "string",
            },
            {
              title: "Start date",
              name: "startDate",
              type: "object",
              fields: [
                {
                  title: "Select date",
                  name: "selectDate",
                  type: "date",
                },
              ],
            },
            {
              title: "End date",
              type: "object",
              name: "endDate",
              fields: [
                {
                  title: "Select date",
                  type: "date",
                  name: "selectDate",
                },
              ],
            },
            {
              title: "Description",
              type: "text",
              name: "description",
            },
            {
              title: "Courses",
              type: "array",
              name: "courses",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
  ],
}

export default profile
