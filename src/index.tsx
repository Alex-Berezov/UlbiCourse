import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProviders'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundery'
import { PageError } from 'widgets/PageError'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ErrorBoundary
      fallback={
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      }
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
