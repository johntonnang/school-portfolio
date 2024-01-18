import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "portfolio",
  title: "Portfolio CMS",
  projectId: "3y5ga3lx",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
