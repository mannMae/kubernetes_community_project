import { store } from 'libraries/reduxToolkit';
import { GlobalStyle, theme } from 'libraries/styled';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
};
