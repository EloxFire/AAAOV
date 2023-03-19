import Image, { StaticImageData } from 'next/image';
import activityCardStyles from '../styles/components/ActivityCard.module.scss'

interface ActivityCardProps {
  title: string
  shortDescription: string
  description: string
  image: StaticImageData
  buttonText: string
  link: string
}

export default function ActivityCard({ title, shortDescription, description, image, buttonText, link }: ActivityCardProps) {
  return (
    <div className={activityCardStyles.card}>
      <div className={activityCardStyles.cardHeader}>
        <Image className={activityCardStyles.cardImage} src={image} alt={title} />
      </div>
      <div className={activityCardStyles.cardBody}>
        <h3 className={activityCardStyles.title}>{title}</h3>
        <p className={activityCardStyles.text}>{shortDescription}</p>
        <p className={activityCardStyles.text}>{description}</p>
      </div>
      <div className={activityCardStyles.cardFooter}>
        <a href={`/${link}`} className={activityCardStyles.button}>{buttonText}</a>
      </div>
    </div>
  )
}
