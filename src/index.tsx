import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundry';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from 'app/App';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
