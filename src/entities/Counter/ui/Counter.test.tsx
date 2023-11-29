import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/config/tests/renderWithRouter'
import { Counter } from 'entities/Counter'

describe('Counter', () => {
  test('test render', () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    expect(screen.getByTestId('counterValue')).toHaveTextContent('10')
  })

  test('increment', () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    fireEvent.click(screen.getByTestId('incrementBtn'))
    expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
  })

  test('decrement', () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    fireEvent.click(screen.getByTestId('decrementBtn'))
    expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
  })
})
