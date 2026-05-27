import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["src/*.js"],
    ignores: ["*.config.js", "src/**/*.test.js"],
    rules: {
      eqeqeq: "error",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
  eslintConfigPrettier,
]);
