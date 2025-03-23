import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigTypeScript from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  eslintConfigPrettier,
  globalIgnores(["node_modules", "build", "coverage"]),
  {
    files: ["*.js", "*.cjs", "*.mjs", "*.ts", "*.cts", "*.mts"],
    plugins: {
      "typescript-eslint": eslintConfigTypeScript.plugin,
    },
    languageOptions: {
      parser: eslintConfigTypeScript.parser,
    },
  },
]);
