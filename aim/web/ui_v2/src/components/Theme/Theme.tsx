import React from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from '@material-ui/core';

import { IThemeProps } from 'types/components/Theme/Theme';

export const ThemeContext = React.createContext({});
const { Provider } = ThemeContext;

const light: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#243969',
    },
    text: {
      // secondary: '#fff',
    },
  },
  spacing: (factor: number) => `${factor}em`,
};

const darkTheme: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#64b5f6',
    },
    text: {
      // secondary: '#000',
    },
  },
};

function Theme(
  props: IThemeProps,
): React.FunctionComponentElement<React.ReactNode> {
  const [dark, setDark] = React.useState<boolean>(false);

  const handleTheme = React.useCallback((): void => {
    setDark(!dark);
  }, [dark]);

  const theme = createMuiTheme(dark ? darkTheme : light);
  return (
    <Provider value={{ dark, handleTheme }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </Provider>
  );
}

export default Theme;
