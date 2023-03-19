import Image from 'next/image'
import { useEffect, useState } from 'react'
import navbarStyles from '../styles/components/Navbar.module.scss'

interface NavbarProps {
  logo?: string
  links: { label: string, href: string }[]
}

export default function Navbar({ logo, links }: NavbarProps) {

  const [navbarActive, setNavbarActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) } //Cleanup on unmount
  }, [])

  const handleScroll = () => {
    const navbar = document.getElementById('navbar')
    if (window.scrollY > 0) {
      setNavbarActive(true)
    } else {
      navbar?.classList.remove('navbar-active')
      setNavbarActive(false)
    }
  }

  return (
    <nav id="navbar" className={navbarStyles.navbar} style={navbarActive ? { display: 'flex' } : { display: 'none' }}>
      <div className="navbar-logo-container">
        {
          logo ?
            <Image alt='Logo des AAAOV' src={logo} className={navbarStyles.logo} />
            :
            <h1>AAAOV</h1>
        }
      </div>
      <div className="navbar-links-container">
        <ul className={navbarStyles.navbarLinks}>
          {
            links.map((link, index) => {
              return (
                <a key={`navbar-link-${index}`} href={link.href} className={navbarStyles.navbarLink}>{link.label}</a>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}
