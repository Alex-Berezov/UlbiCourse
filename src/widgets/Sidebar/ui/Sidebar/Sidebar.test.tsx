import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  test('Render component', () => {
    render(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle button', () => {
    render(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleBtn = screen.getByTestId('sidebarToggle')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
