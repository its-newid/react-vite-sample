import { createRoot } from 'react-dom/client';
import { Router as Navigation } from '@/routes';
import { HashRouter } from 'react-router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
            <Navigation />
        </HashRouter>
    </ThemeProvider>,
);
