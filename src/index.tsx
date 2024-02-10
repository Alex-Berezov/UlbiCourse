import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import { ErrorBoundary } from 'app/providers/ErrorBoundery'
import { PageError } from 'widgets/PageError'
import { StoreProvider } from 'app/providers/StorePropvider'
import 'app/styles/index.scss'

import 'shared/config/i18n/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary
        fallback={
          <Suspense fallback="">
            <PageError />
          </Suspense>
        }
      >
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
