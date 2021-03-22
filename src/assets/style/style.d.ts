import 'styled-components'

declare module 'styled-components' { // Add own themes (remember to copy it to Theme.ts)
  export interface DefaultTheme {
    colors: {
      white: '#ffffff',
      black: '#000000',
    }
  }
}

