import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/i18n'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

export interface renderWithProvidersOptions {
  route?: string
}

export const renderWithProviders = (
  component: ReactNode,
  options: renderWithProvidersOptions = {}
) => {
  const { route = '/' } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </MemoryRouter>
  )
}
