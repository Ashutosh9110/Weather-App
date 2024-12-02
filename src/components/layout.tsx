import type { PropsWithChildren } from 'react'
import Header from './header'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        <Header /> 
        <main className='min-h-screen container mx-auto px-4 py-8'>
        {children}
        </main>
          <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/'>
            <div className='container mx-auto px-4 text-center text-gray-800'>
              <p>Sab moh maya hai</p>
            </div>
          </footer>
        footer
    </div>
  )
}

export default Layout