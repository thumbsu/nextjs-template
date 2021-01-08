import { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'stores'
import { decrementCounter, incrementCounter } from 'stores/counter/actions'

const Home: NextPage = () => {
  const { count } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="py-2 px-4">
      <h1 className="font-mono text-lg py-2">{count}</h1>
      <button
        onClick={() => dispatch(incrementCounter(count))}
        className="mr-2 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        increment +
      </button>
      <button
        onClick={() => dispatch(decrementCounter(count))}
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        decrement -
      </button>
    </div>
  )
}

export default Home
