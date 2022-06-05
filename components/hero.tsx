import Image, { StaticImageData } from "next/image"
import { FC } from "react"

type props = {
  imgSrc: StaticImageData
  text: string
}

const Hero: FC<props> = ({ imgSrc, text }) => {
  return (
    <div className="relative h-[300px] flex items-end pb-[30px]">
      <div className="text-h1 z-50 relative container">
        <h1>{ text }</h1> 
      </div>
      <Image src={imgSrc} layout='fill' className="object-cover object-center" />
    </div>
  )
}

export default Hero