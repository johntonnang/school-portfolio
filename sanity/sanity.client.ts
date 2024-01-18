import { createClient, type ClientConfig } from "@sanity/client"

const config: ClientConfig = {
  projectId: "3y5ga3lx",
  dataset: "production",
  apiVersion: "2024-01-17",
  useCdn: false,
}

const client = createClient(config)

export default client
