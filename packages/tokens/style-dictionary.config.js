module.exports = {
  platforms: {
    root: {
      include: [],
      source: [
        "src/tokens/base/**/*.json",
        "src/tokens/semantic/**/*.json"
      ],
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "root.css",
          format: "css/variables",
          options: {
            selector: ":root"
          }
        }
      ]
    },

    light: {
      include: [
        "src/tokens/base/**/*.json",
        "src/tokens/semantic/**/*.json"
      ],
      source: ["src/tokens/themes/light.json"],
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "theme-light.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes("/themes/light.json"),
          options: {
            selector: '[data-theme="light"]'
          }
        }
      ]
    },

    dark: {
      include: [
        "src/tokens/base/**/*.json",
        "src/tokens/semantic/**/*.json"
      ],
      source: ["src/tokens/themes/dark.json"],
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "theme-dark.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes("/themes/dark.json"),
          options: {
            selector: '[data-theme="dark"]'
          }
        }
      ]
    },

    hcLight: {
      include: [
        "src/tokens/base/**/*.json",
        "src/tokens/semantic/**/*.json"
      ],
      source: ["src/tokens/themes/hc-light.json"],
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "theme-hc-light.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes("/themes/hc-light.json"),
          options: {
            selector: '[data-theme="hc-light"]'
          }
        }
      ]
    },

    hcDark: {
      include: [
        "src/tokens/base/**/*.json",
        "src/tokens/semantic/**/*.json"
      ],
      source: ["src/tokens/themes/hc-dark.json"],
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "theme-hc-dark.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes("/themes/hc-dark.json"),
          options: {
            selector: '[data-theme="hc-dark"]'
          }
        }
      ]
    },

    json: {
      include: [],
      source: [
        "src/tokens/base/**/*.json",
        "src/tokens/semantic/**/*.json"
      ],
      transformGroup: "js",
      buildPath: "dist/json/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested"
        }
      ]
    }
  }
};