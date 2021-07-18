import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      main: string
      block: string
      element: string
      sub: string
    },

    size: {
      base: number
      sub: number
    }

    color: {
      main: string
      sub: string
    },
  
    border: {
      base: string
      radius: number
    },
  
    padding: {
      base: number
      big: number
    },
  
    font: {
      small: number
      common: number
      header: number
    },
  }
}