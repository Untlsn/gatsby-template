import StyleProvider from '../src/providers/StyleProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <StyleProvider fonts={[]}>
        <Story />
      </StyleProvider>
  )
]