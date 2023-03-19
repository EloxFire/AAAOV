import Image from 'next/image'
import React, { useEffect } from 'react'
import navbarStyles from '../styles/components/Navbar.module.scss'

interface NavbarProps {
  logo?: string
  links: { label: string, href: string }[]
}

export default function Navbar({ logo, links }: NavbarProps) {

  useEffect(() => {
    const navbar = document.getElementById('navbar')
  }, [])
  window.addEventListener('scroll', () => {
    if (navbar) {
      console.log("true");

      if (window.scrollY >= 0) {
        navbar.style.display = 'none'
      } else {
        navbar.style.display = 'flex'
      }
    } else {
      console.log("false");
    }
  })

  return (
    <nav id="navbar" className={navbarStyles.navbar}>
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
