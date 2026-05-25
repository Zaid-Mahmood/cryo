"use client"
import giftImg from "@/assets/gift-cards-img/cards-img.png";
import Image from "next/image";
import Link from "next/link";
const GiftPackages = () => {
  return (
    <div className='px-5 md:px-0 pt-13 flex justify-center'>
      <Link
        target="_blank"
        href="https://www.fresha.com/a/cryo-subzero-cheltenham-284-bay-road-x216yymn/gift-cards?share=true&pId=2636491&menu=true" >
        <Image src={giftImg} alt="gift-card-img" />
      </Link>

    </div>

  )
}

export default GiftPackages
