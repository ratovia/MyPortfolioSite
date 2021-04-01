export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  backgrounds: {
    values: [
      { name: "red", value: "#F04949" },
      { name: "gray", value: "#414141" },
    ],
  },
}
