import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_FSdJj0ZB6qRQ@ep-billowing-mountain-aq75mvyg.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require',
  },
  out: "./drizzle",
  verbose: true,
  strict: true,
})