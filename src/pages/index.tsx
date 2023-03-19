import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'
import universe_illustration from '/public/images/universe_illustration.svg'
import aerial from '/public/images/carroussel/aerial.png'
import sunset from '/public/images/carroussel/sunset.png'
import field_view from '/public/images/carroussel/field_view.png'
import aerial_2 from '/public/images/carroussel/aerial_2.png'
import sunset_2 from '/public/images/carroussel/sunset_2.png'
import homeStyles from '../styles/pages/Home.module.scss'
import Image from 'next/image'
import HomeCta from '@/components/HomeCta'
import { ReactScrolling } from 'react-auto-glide';

export default function Home() {

  // const [navbarActive, setNavbarActive] = useState(true)

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => { window.removeEventListener('scroll', handleScroll) } //Cleanup on unmount
  // }, [])

  // const handleScroll = () => {
  //   const navbar = document.getElementById('navbar')
  //   if (window.scrollY > 0) {
  //     setNavbarActive(false)
  //   } else {
  //     navbar?.classList.remove('navbar-active')
  //     setNavbarActive(true)
  //   }
  // }

  const mapper = (source: any) => (
    <Image key={source} src={source} alt="" />
  );

  return (
    <div className={homeStyles.app}>
      <div className={homeStyles.homeHeader}>
        <Image alt='Logo des AAAOV' src={AAAOV_LOGO} />
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
        {/* <ReactScrolling mapper={mapper} list={[aerial, sunset, aerial_2, field_view, sunset_2]} width='300px' time={"20s"} delayBetweenScroll="0" /> */}
      </div>

    </div >
  )
}
