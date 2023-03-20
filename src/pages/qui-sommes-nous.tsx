import React from 'react'
import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'
import Navbar from '../components/Navbar'
import aboutStyles from '../styles/pages/About.module.scss'
import Footer from '../components/Footer'
import File from '../components/File'
import members_nights from '/public/images/thumbnails/members_nights.png'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Navbar logo={AAAOV_LOGO} links={[
        { label: 'Devenir adhérant', href: '/rejoindre' },
        { label: 'Qui sommes nous ?', href: '/qui-sommes-nous' },
        { label: 'Agenda', href: '/' },
        { label: 'Boutique', href: '/' },
        { label: 'Nous contacter', href: '/' }
      ]} />
      <div className={aboutStyles.about}>
        <h1>Qui sommes-nous ?</h1>
        <p className={aboutStyles.subtitle}>Présentation des AAAOV</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ width: '35%' }}>
            <Image alt='Membre initiaux des AAAOV' src={members_nights} className={aboutStyles.image} />
          </div>
          <div style={{ width: '60%' }}>
            <p className={aboutStyles.text}>L&apos;association des Astronomes Amateurs Aixois de l&apos;Observatoire de Vauvenargues est régie par la loi du 1er juillet 1901. Elle a pour but de favoriser, développer et promouvoir l’astronomie d’amateurs auprès de ses membres, par la mise en commun de moyens, de matériels et l&apos;échange de connaissances. Elle a également pour but de promouvoir cette discipline auprès de tout public intéressé par le biais de soirées publiques ainsi que de conférences données aux Arts et Métiers d&apos;Aix en Provence.</p>
          </div>
        </div>

        <div className={aboutStyles.contentContainer}>
          <h2 className={aboutStyles.contentHeader}>Historique</h2>
          <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
            <div style={{ width: '35%' }}>
              <Image alt='Membre initiaux des AAAOV' src={members_nights} className={aboutStyles.image} />
            </div>
            <div style={{ width: '60%' }}>
              <p className={aboutStyles.text}>L&apos;association a été créée en 1979 par Brigitte Cordaro Rouy, Robert Mouttet et quelques amis sous le nom d&apos;Astronomes Amateurs Aixois (3A).</p>
              <p className={aboutStyles.text}>Après quelques années à chercher le site idéal, l&apos;observatoire a pris place dans une ancienne bergerie située sur les hauteurs de Vauvenargues.</p>
              <p className={aboutStyles.text}>En 1991 sous la présidence de Robert Heikes, le club a été baptisé AAAOV.Inauguré fin 1994, l&apos;Observatoire de la Sinne est l&apos;aboutissement de plus de 10 années de travail. L&apos;inauguration et le baptême de la coupole ont été fêtés en grandes pompes.</p>
            </div>
          </div>
          <div style={{ marginTop: '5vh' }}>
            <h3 className={aboutStyles.contentHeader}>Description de l&apos;obervatoire</h3>
            <p className={aboutStyles.text}>L&apos;observatoire comprend une coupole abritant un C14 sur une monture équatoriale et un local à proximité, attenant à une ferme occupée toute l&apos;année et protégée. Ce local est spacieux, accueillant et bien aménagé.</p>
          </div>
        </div>
        <div className={aboutStyles.contentContainer}>
          <h2 className={aboutStyles.contentHeader}>Zone de téléchargements</h2>
          <p className={aboutStyles.text}>Voici quelques liens utiles sur l&apos;association :</p>
          <div className={aboutStyles.linksDownloadContainer}>
            <File name="Bullettin d'adhésion (2023)" url="http://www.astrosurf.com/aaaov/documents/Bulletin%20d'adh%C3%A9sion%20AAAOV.pdf" />
            <File name="Status de l'association" url="http://www.astrosurf.com/aaaov/documents/1-Statuts%202018.pdf" />
            <File name="Règlement intérieur" url="http://www.astrosurf.com/aaaov/documents/2-%20RI%202018-03.pdf" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
