import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import carousselStyles from '../styles/components/Caroussel.module.scss'
import Autoplay from 'embla-carousel-autoplay'

interface CarousselProps {
  images: StaticImageData[]
  options?: EmblaOptionsType
  autoplay?: boolean
}

export default function Caroussel({ images, options }: CarousselProps) {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, stopOnMouseEnter: true, stopOnInteraction: false, delay: 0, })])

  return (
    <div className={carousselStyles.embla}>
      <div className={carousselStyles.embla__viewport} ref={emblaRef}>
        <div className={carousselStyles.embla__container}>
          {images.map((image, index) => (
            <div className={carousselStyles.embla__slide} key={index}>
              <Image
                className={carousselStyles.embla__slide__inner}
                src={image}
                alt="Lieu d'observation"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}