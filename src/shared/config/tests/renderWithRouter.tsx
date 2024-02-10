import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/i18n'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StorePropvider'

export interface renderWithProvidersOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export const renderWithProviders = (
  component: ReactNode,
  options: renderWithProvidersOptions = {}
) => {
  const { route = '/', initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
