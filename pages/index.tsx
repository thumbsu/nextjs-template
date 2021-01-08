import { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'stores'
import { decrementCounter, incrementCounter } from 'stores/counter/actions'

const Home: NextPage = () => {
  const { count } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="index">
      <div>{count}</div>
      <button onClick={() => dispatch(incrementCounter(count))}>+</button>
      <button onClick={() => dispatch(decrementCounter(count))}>-</button>
    </div>
  )
}

export default Home
