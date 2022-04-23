import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider} from '../data/context/AppContext'
import { AuthProvider} from '../data/context/AppContext'


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
    )
  }



export default MyApp
