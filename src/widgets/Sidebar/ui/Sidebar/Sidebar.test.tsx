import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { Sidebar } from 'widgets/Sidebar'
import i18n from 'shared/config/i18n/i18n'

describe('Sidebar', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <I18nextProvider i18n={i18n}>
        <Router>{component}</Router>
      </I18nextProvider>
    )
  }

  test('Render component', () => {
    renderWithProviders(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle button', () => {
    renderWithProviders(<Sidebar />)

    const toggleBtn = screen.getByTestId('sidebarToggle')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
