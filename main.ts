// Rocket Dodge — X-post entry for "The agent builds a game from one prompt".
// The program's one job: copy POST.json from the repository root to /output,
// byte for byte, after checking it names an X post address. No network, stdlib only.
// Run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const here = dirname(fileURLToPath(import.meta.url));

const raw = readFileSync(join(here, "POST.json"), "utf8");
const post: unknown = JSON.parse(raw);

if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url");
}
const url = (post as { url: string }).url;
const xPost =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(i\/web\/status\/\d+|[^/]+\/status\/\d+)([?#].*)?$/.test(
    url,
  );
if (!xPost) {
  throw new Error("POST.json url is not an X post address: " + url);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
