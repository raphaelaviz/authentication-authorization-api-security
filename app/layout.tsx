import { AuthProvider } from './components/AuthProvider'
import Navbar from './components/Navbar'
import './globals.css'


export const metadata = {
  title: 'AllAuth - Security Practices',
  description: 'Authentication, authorization, JWT, API protection and password encryption.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen'>
        <AuthProvider>
          <Navbar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
