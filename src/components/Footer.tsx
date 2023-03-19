import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'
import universe_illustration_footer from '/public/images/universe_illustration_footer.svg'
import Image from 'next/image'
import React from 'react'
import footerStyles from '../styles/components/Footer.module.scss'

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerLeft}>
        <Image
          className={footerStyles.footerImage}
          src={AAAOV_LOGO}
          alt="AAAOV Logo"
        />
      </div>
      <div className={footerStyles.footerRight}>
        <div>
          <div className={footerStyles.footerInfos}>
            <p>Astronomes Amateurs Aixois de l&apos;Observatoire de Vauvenargues</p>
            <p>Association loi 1901 fondée en 1979</p>
          </div>
          <div className={footerStyles.footerInfos}>
            <p>1185 Chemin du Puits d&apos;Auzon</p>
            <p>13126 Vauvenargues</p>
            <p>France</p>
          </div>
          <div className={footerStyles.footerInfos}>
            <p>Copyright &copy; {new Date().getFullYear()} - AAAOV</p>
            <p>Site réalisé par <a className={footerStyles.link} href="https://enzoavagliano.fr" target={'_blank'}>Enzo Avagliano</a> - Membre des AAAOV</p>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <p>AAAOV</p>
<p>Astronomes Amateurs Aixois de l&apos;Observatoire de Vauvenargues</p>
<p>Association loi 1901 fondée en 1979</p>
<div className={footerStyles.separator}></div>
<p>1185 Chemin du Puits d&apos;Auzon</p>
<p>13126 Vauvenargues</p>
<p>France</p>
<div className={footerStyles.separator}></div>
<p>Copyright &copy; {new Date().getFullYear()} - AAAOV</p>
<p>Site réalisé par <a className={footerStyles.link} href="https://enzoavagliano.fr">Enzo Avagliano</a> - Membre des AAAOV</p> */}