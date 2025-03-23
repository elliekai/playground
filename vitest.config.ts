import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "build/**", "data/**"],
    deps: {
      moduleDirectories: ["node_modules"],
    },
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        "build/**",
        "data/**",
        "cli.mjs",
      ],
    },
  },
});
