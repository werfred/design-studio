import {GlobalStyles} from 'constants/globalStyles'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer limit={2} />
    </>

  )
}

export default MyApp
