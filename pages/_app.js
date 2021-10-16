import Navmuni from '../components/Navmuni'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navmuni />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
