import giftImg from "@/assets/gift-cards-img/cards-img.png";
import Image from "next/image";
const GiftPackages = () => {
  return (
    <div className='px-5 md:px-0 pt-13 flex justify-center'>
      <Image src={giftImg} alt="gift-card-img" />
    </div>
  )
}

export default GiftPackages
