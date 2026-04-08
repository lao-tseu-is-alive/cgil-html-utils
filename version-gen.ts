import { version } from "./package.json";
import { write } from "bun";

const content = `export const LIB_VERSION = "${version}";\n`;
await write("src/version.ts", content);
