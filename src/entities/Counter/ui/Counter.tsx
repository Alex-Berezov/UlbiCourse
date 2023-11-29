import { FC } from 'react'
import { Button } from 'shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
  className?: string
}

const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch()

  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="counterValue">Value = {counterValue}</h1>
      <Button data-testid="incrementBtn" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrementBtn" onClick={decrement}>
        decrement
      </Button>
    </div>
  )
}

export default Counter
