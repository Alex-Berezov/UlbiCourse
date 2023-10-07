import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/config/tests/renderWithRouter'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
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
