import { screen } from '@testing-library/react'
import Button, { ButtonTheme } from './Button'
import { renderWithProviders } from 'shared/config/tests/renderWithRouter'

describe('Button', () => {
  test('Simple button test', () => {
    renderWithProviders(<Button>some</Button>)

    const buttonText = screen.getByText('some')
    expect(buttonText).toBeInTheDocument()
    expect(buttonText.tagName).toBe('BUTTON')
  })

  test('Test clear theme', () => {
    renderWithProviders(<Button theme={ButtonTheme.CLEAR}>some</Button>)

    const buttonText = screen.getByText('some')
    expect(buttonText).toBeInTheDocument()
    expect(buttonText).toHaveClass(ButtonTheme.CLEAR)
  })
})
