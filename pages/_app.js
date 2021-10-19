import Navmuni from '../components/Navmuni'
import '../styles/main.scss'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navmuni />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
