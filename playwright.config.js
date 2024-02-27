const config = {
  testMatch: "test.playwright.js",
  use: {
    trace: "on",
  },
  webServer: {
    command: "node index.js",
  },
  projects: [
    {
      name: "Firefox",
    },
    {
      name: "WebKit",
    },
  ],
};

export default config;
