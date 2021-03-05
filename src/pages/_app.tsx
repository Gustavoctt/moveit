import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
