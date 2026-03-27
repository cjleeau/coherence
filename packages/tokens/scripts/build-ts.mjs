import fs from "node:fs";
import path from "node:path";

const jsonInputPath = path.resolve("dist/json/tokens.json");
const tsOutputDir = path.resolve("dist/ts");
const tsOutputPath = path.resolve(tsOutputDir, "tokens.ts");

const cssDir = path.resolve("dist/css");
const cssOutputPath = path.resolve(cssDir, "variables.css");

function flattenTokens(tokens, currentPath = [], result = {}) {
  for (const [key, value] of Object.entries(tokens)) {
    const nextPath = [...currentPath, key];

    if (value && typeof value === "object" && "value" in value) {
      result[nextPath.join(".")] = value.value;
    } else if (value && typeof value === "object") {
      flattenTokens(value, nextPath, result);
    }
  }

  return result;
}

function buildTs() {
  const raw = fs.readFileSync(jsonInputPath, "utf8");
  const json = JSON.parse(raw);
  const flattened = flattenTokens(json);

  fs.mkdirSync(tsOutputDir, { recursive: true });
  fs.writeFileSync(
    tsOutputPath,
    `export const tokens = ${JSON.stringify(flattened, null, 2)} as const;\n`,
    "utf8"
  );

  console.log(`Generated ${tsOutputPath}`);
}

function buildCssBundle() {
  const parts = [
    "root.css",
    "theme-light.css",
    "theme-dark.css",
    "theme-hc-light.css",
    "theme-hc-dark.css"
  ];

  const content = parts
    .map((fileName) => fs.readFileSync(path.join(cssDir, fileName), "utf8").trim())
    .join("\n\n");

  fs.writeFileSync(cssOutputPath, `${content}\n`, "utf8");
  console.log(`Generated ${cssOutputPath}`);
}

buildTs();
buildCssBundle();