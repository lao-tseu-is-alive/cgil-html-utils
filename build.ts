import fs from "fs";
import {$, write} from "bun";
import { version } from "./package.json";

const outputDir = "./dist";

console.log(`🐰 🧹 Cleanup of old ${outputDir} content...`);
await $`rm -rf ${outputDir}`;
const now = new Date()
const content = `export const LIB_VERSION = "${version}";\n
export const BUILD_TIME = "${now.toISOString()}";
`;
await write("src/version.ts", content);


const sharedConfig = {
  entrypoints: ["./src/index.ts"],
  outdir: outputDir,
  minify: true,
  sourcemap: "external" as const,
};

console.log("🐰 📦 Generating bundles with Bun...");
await Promise.all([
  // Module ES (for modern bundlers)
  Bun.build({ ...sharedConfig,  format: "esm", naming: "cgilHtmlUtils.esm.js" }),

  // CommonJS (for Node.js)
  Bun.build({ ...sharedConfig, format: "cjs", naming: "cgilHtmlUtils.cjs.js" }),

  // Browser (IIFE with specific entry point)
  Bun.build({ ...sharedConfig, entrypoints: ["./src/browser.ts"], format: "iife", naming: "cgilHtmlUtils.umd.js" })
]);
console.log("🐰 ✅ Bundles successfully generated !");
console.log("🐰 🎓 Generating Type Definitions...");
// We force --noEmit to false ==> override the config file
await $`bun x tsc  --project tsconfig.json --noEmit false`;
const dtsPath = `${outputDir}/index.d.ts`;
const targetDtsPath = `${outputDir}/cgHtmlUtils.d.ts`;
const typesToPrune = [
  `${outputDir}/browser.d.ts`,
  `${outputDir}/version.d.ts`,
];

console.log("🐰 🧹 Type cleanup...");
for (const file of typesToPrune) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
}
if (fs.existsSync(dtsPath)) {
  fs.renameSync(dtsPath, targetDtsPath);
  console.log(`🐰 🏷️  Types renamed to ${targetDtsPath}`);
}
