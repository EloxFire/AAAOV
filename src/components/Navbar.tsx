import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import navbarStyles from '../styles/components/Navbar.module.scss'

interface NavbarProps {
  logo?: string
  links: { label: string, href: string }[]
}

export default function Navbar({ logo, links }: NavbarProps) {
  return (
    <nav id="navbar" className={navbarStyles.navbar}>
      <div className="navbar-logo-container">
        {
          logo ?
            <Link href="/">
              <Image alt='Logo des AAAOV' src={logo} className={navbarStyles.logo} />
            </Link>
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
