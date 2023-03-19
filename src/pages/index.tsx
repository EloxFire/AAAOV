import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'
import universe_illustration from '/public/images/universe_illustration.svg'
import aerial from '/public/images/carroussel/aerial.png'
import sunset from '/public/images/carroussel/sunset.png'
import field_view from '/public/images/carroussel/field_view.png'
import aerial_2 from '/public/images/carroussel/aerial_2.png'
import sunset_2 from '/public/images/carroussel/sunset_2.png'
import public_nights from '/public/images/thumbnails/public_nights.png'
import members_nights from '/public/images/thumbnails/members_nights.png'
import astrophoto from '/public/images/thumbnails/astrophoto.png'
import conferences from '/public/images/thumbnails/conferences.png'
import Image from 'next/image'
import HomeCta from '@/components/HomeCta'
import Caroussel from '../components/Caroussel'
import homeStyles from '../styles/pages/Home.module.scss'
import globalsStyles from '../styles/globals.module.scss'
import ActivityCard from '../components/ActivityCard'
import Footer from '../components/Footer'

export default function Home() {
  const mapper = (source: any) => (
    <Image key={source} src={source} alt="" />
  );

  return (
    <div className={homeStyles.app}>
      <div className={homeStyles.homeHeader}>
        <Image alt='Logo des AAAOV' src={AAAOV_LOGO} className={homeStyles.headerImage} />
        <Image alt='Etoiles et objets célestes' src={universe_illustration} className={homeStyles.headerIllustration} />
      </div>
      <div className={homeStyles.titleContainer}>
        <p className={homeStyles.subtitle}>Bienvenue sur le site des</p>
        <h1 className={homeStyles.title}>Astronomes Amateurs Aixois de <br></br> l&apos;Observatoire de Vauvenargues</h1>
      </div>
      <div className={homeStyles.ctaContainer}>
        <HomeCta label="Devenir adérant" href='/rejoindre' />
        <HomeCta label="Qui sommes nous ?" href='/qui-sommes-nous' />
        <HomeCta label="Agenda" href='/agenda' />
        <HomeCta label="Boutique" href='/boutique' />
        <HomeCta label="Téléchargements" href='/telechargements' />
        <HomeCta label="Nous contacter" href='/contact' />
      </div>
      <div className={homeStyles.carrousselContainer}>
        <Caroussel
          images={[aerial, sunset, aerial_2, field_view, sunset_2]}
          options={{ loop: true, speed: .01 }}
          autoplay
        />
      </div>
      <div className={homeStyles.contentContainer}>
        <h2 className={globalsStyles.contentTitle}>Les activités des AAAOV</h2>
        <div className={homeStyles.activitiesContainer}>
          <ActivityCard
            title="Soirée publiques"
            shortDescription="Participez à nos soirées publiques !"
            description="Les soirées publiques sont des soirées d'observation ouvertes à tous, organisées par les AAAOV. Elles sont l'occasion de découvrir l'astronomie et de partager sa passion avec d'autres amateurs."
            image={public_nights}
            buttonText="Calendrier des soirées publiques"
            link="agenda"
          />
          <ActivityCard
            title="Soirée adhérants"
            shortDescription="L'astronomie vous passionne ?"
            description="Les Astronomes Amateurs Aixois de l'Observatoire de Vauvenargues vous accueillent et vous accompagnent dans votre passion avec de la formation interne dans diverses activités liées à l'astronomie"
            image={members_nights}
            buttonText="Calendrier des soirées adhérants"
            link="agenda"
          />
          <ActivityCard
            title="Astrophotographie"
            shortDescription="L'astrophotographie vous intéresse ?"
            description="Dans un cadre propice, les AAAOV accueillent, forment et accompagnent les adhérents dans l'astrophotographie. Leurs travaux sont affichés dans la salle de projection ainsi que sur le site web."
            image={astrophoto}
            buttonText="Voir les photos"
            link="galerie"
          />
          <ActivityCard
            title="Conférences"
            shortDescription="Venez assister à nos conférences !"
            description="2023, reprise des conférences aux Arts et Métiers d'Aix en Provence. Uniquement sur réservation sur HelloAsso."
            image={conferences}
            buttonText="Calendrier des conférences"
            link="agenda"
          />
        </div>
      </div>
      <Footer />
    </div >
  )
}
