import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  target: "node22",
  external: [
    "@prisma/client",
    "@prisma/adapter-pg",
    "pg"
  ]
});
