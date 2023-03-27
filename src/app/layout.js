import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import './globals.css'
import Providers from './Providers'


export const metadata = {
  title: 'Movie App',
  description: 'By Pawan Kr',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">

      <body>
        <Providers>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>

      </body>
    </html>
  )
}
export default RootLayout
