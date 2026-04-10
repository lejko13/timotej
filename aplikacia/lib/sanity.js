import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "TVOJE_PROJECT_ID",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});