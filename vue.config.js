module.exports = {
  lintOnSave: false,
  outputDir: "docs",
  pages: {
    index: {
      entry: "./src/main.ts",
      template: "./src/index.pug",
    },
  },
};
