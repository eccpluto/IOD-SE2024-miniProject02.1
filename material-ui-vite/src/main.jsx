import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import theme from './theme';
import { UserProvider } from './context/UserContext';
import { DataProvider } from './context/DataContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <UserProvider>
        <DataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataProvider>
      </UserProvider>
    </ThemeProvider>
    ,
  </React.StrictMode>,
);
