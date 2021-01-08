import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { IState, wrapper } from 'stores'

export const getServerSideProps = wrapper.getServerSideProps(({ store, req, res, ...etc }) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things')
  store.dispatch({ type: 'TICK', payload: 'was set in other page' })
})

const Home: NextPage = () => {
  const { tick } = useSelector<IState, IState>(state => state)
  return <div className="index">{tick}</div>
}

export default Home
