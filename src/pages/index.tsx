import Navbar from '../components/Navbar'
import AAAOV_LOGO from '/public/images/AAAOV_logo.svg'

export default function Home() {

  return (
    <div className="app">
      <Navbar logo={AAAOV_LOGO} links={[
        { label: 'Devenir adhérant', href: '/' },
        { label: 'Qui sommes nous ?', href: '/' },
        { label: 'Agenda', href: '/' },
        { label: 'Boutique', href: '/' },
        { label: 'Téléchargements', href: '/' },
        { label: 'Nous contacter', href: '/' }
      ]} />

    </div>
  )
}
