import { DefaultTheme } from "styled-components";

const colors = {
  light: {
    primary: '#007bff',
    secondary: '#6c757d',
    white: '#fff',
  },
  dark: {
    primary: '#0d6efd',
    secondary: '#adb5bd',
    white: '#f8f9fa',
  },
}

const theme: DefaultTheme = {
  colors,
  space: ['0', '4px', '8px', '16px', '32px', '64px'],
};

export default theme;