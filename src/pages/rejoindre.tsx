import React from 'react'
import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'
import Navbar from '../components/Navbar'
import joinStyles from '../styles/pages/Join.module.scss'
import Footer from '../components/Footer'
import File from '../components/File'

export default function rejoindre() {
  return (
    <>
      <Navbar logo={AAAOV_LOGO} links={[
        { label: 'Devenir adhérant', href: '/rejoindre' },
        { label: 'Qui sommes nous ?', href: '/qui-sommes-nous' },
        { label: 'Agenda', href: '/' },
        { label: 'Boutique', href: '/' },
        { label: 'Téléchargements', href: '/' },
        { label: 'Nous contacter', href: '/' }
      ]} />
      <div className={joinStyles.join}>
        <h1>Passionnés d&apos;astronomie ? Adhérez à l&apos;association.</h1>
        <p className={joinStyles.subtitle}>Etre adhérent c&apos;est quoi ?</p>
        <p className={joinStyles.text}>Les Astronomes Amateurs Aixois de l&apos;Observatoire de Vauvenargues accueillent les personnes qui désirent pratiquer l&apos;astronomie dans un environnement dédié à cette activité.<br></br>Pour tout renseignement supplémentaire prendre contact avec notre bureau.</p>

        <div className={joinStyles.contentContainer}>
          <h2 className={joinStyles.contentHeader}>La cotisation</h2>
          <p className={joinStyles.text}>- La cotisation est annuelle (de janvier à décembre)</p>
          <p className={joinStyles.text}>- Elle suit les tarifs suivant (en application depuis 2023)</p>
          <table className="GeneratedTable">
            <thead>
              <tr>
                <th>Adulte</th>
                <th>Adulte -16 ans</th>
                <th>Couples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>40€</td>
                <td>20€</td>
                <td>60€</td>
              </tr>
            </tbody>
          </table>
          <p className={joinStyles.text}>Pour les primo-adhérents qui s&apos;inscriraient à partir de <u>septembre</u>, nous proposons un tarif comprenant la fin d&apos;année et l&apos;année suivante.</p>
          <table className="GeneratedTable">
            <thead>
              <tr>
                <th>Adulte</th>
                <th>Adulte -16 ans</th>
                <th>Couples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60€</td>
                <td>30€</td>
                <td>90€</td>
              </tr>
            </tbody>
          </table>
          <p className={joinStyles.text}>La cotisation comprends les éléments suivants :</p>
          <ul className={joinStyles.list}>
            <li className={joinStyles.text}>
              L&apos;accès à l&apos;Observatoire (bastide) par des permanences assurées par des organisateurs (animateurs) au minimum 2 vendredis soir par mois, le samedi ou en semaine.
            </li>
            <li className={joinStyles.text}>
              La formation des nouveaux adhérents (ciel, instruments, photos CCD) est assurée au fil de l&apos;année.
            </li>
            <li className={joinStyles.text}>
              L&apos;accès à la bibliothèque.
            </li>
          </ul>
        </div>
        <div className={joinStyles.contentContainer}>
          <h2 className={joinStyles.contentHeader}>Paiement</h2>
          <p className={joinStyles.text}>Le paiement de la cotisation se fait par chèque à l&apos;ordre de l&apos;association (AAAOV) ou par virement bancaire :</p>
          <ul className={joinStyles.list}>
            <li className={joinStyles.text}>
              Par virement bancaire, sur le site <a className={joinStyles.link} href="https://www.helloasso.com/associations/astronomes-amateurs-aixois-observatoire-de-vauvenargues-aaaov" target={'_blank'}>HelloAsso</a>
            </li>
            <li className={joinStyles.text}>
              Les paiements par chèque sont à remettre à l&apos;un des animateurs lors de vote passage à l&apos;observatoire.
            </li>
          </ul>
        </div>
        <div className={joinStyles.contentContainer}>
          <h2 className={joinStyles.contentHeader}>Liens utiles</h2>
          <p className={joinStyles.text}>Voici quelques liens utiles sur l&apos;association :</p>
          <div className={joinStyles.linksDownloadContainer}>
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
