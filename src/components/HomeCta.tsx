import ctaStyles from '../styles/components/HomeCta.module.scss'

interface HomeCtaProps {
  label: string
  href: string
}

export default function HomeCta({ label, href }: HomeCtaProps) {
  return (
    <button className={ctaStyles.cta}>{label}</button>
  )
}
