import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from './Button'

describe('Button', () => {
  test('Simple button test', () => {
    render(<Button>some</Button>)

    expect(screen.getByText('some')).toBeInTheDocument()
  })

  test('Test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>some</Button>)

    expect(screen.getByText('some')).toHaveClass('clear')
    screen.debug()
  })
})
