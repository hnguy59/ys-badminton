import { Banner } from './Banner'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'
import { useState } from 'react'

export function LayoutWrapper({ children }) {
  const [navShow, setNavShow] = useState(false)
  const onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <Banner />
      <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
      <Header onToggleNav={onToggleNav} />
      <div className="fixed left-0 top-0 z-[-1] h-screen w-screen bg-ys-cover-image opacity-10"></div>
      <div className="mx-auto max-w-3xl px-3 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-col justify-between">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}
