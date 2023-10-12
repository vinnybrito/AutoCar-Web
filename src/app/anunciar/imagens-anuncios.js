import Image from 'next/image'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpeg'

export const images = [
    { name: "option-one", image: <Image src={img1} alt="Ford" width={80} /> },
    { name: "option-two", image: <Image src={img2} alt="Ford" width={80} /> },
    { name: "option-tree", image: <Image src={img3} alt="Ford" width={80} /> },
]