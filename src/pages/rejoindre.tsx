import React from 'react'
import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'
import Navbar from '../components/Navbar'
import joinStyles from '../styles/pages/Join.module.scss'

export default function rejoindre() {
  return (
    <>
      <Navbar logo={AAAOV_LOGO} links={[
        { label: 'Devenir adhérant', href: '/rejoindre' },
        { label: 'Qui sommes nous ?', href: '/' },
        { label: 'Agenda', href: '/' },
        { label: 'Boutique', href: '/' },
        { label: 'Téléchargements', href: '/' },
        { label: 'Nous contacter', href: '/' }
      ]} />
      <div className={joinStyles.join}>
        <h1>Passionnés d&apos;astronomie ? Adhérez à l&apos;association.</h1>
        <p className={joinStyles.subtitle}>Etre adhérent c&apos;est quoi ?</p>
        <p>Les Astronomes Amateurs Aixois de l&apos;Observatoire de Vauvenargues accueillent les personnes qui désirent pratiquer l&apos;astronomie dans un environnement dédié à cette activité.Pour tout renseignement supplémentaire prendre contact avec notre bureau.</p>
      </div>
    </>
  )
}
