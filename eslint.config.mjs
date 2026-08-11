import eslintConfig from "eslint-config-next";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["build"],
    ...eslintConfig.sharedConfig.recommended,
  },
];
