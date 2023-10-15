import { GlobalStyle, theme } from 'libraries/styled';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        {children}
      </BrowserRouter>
    </ThemeProvider>
  );
};
