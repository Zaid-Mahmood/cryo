import Image, { StaticImageData } from "next/image";

interface TileItem {
  img: StaticImageData;
  heading: string;
  desc: string;
}

interface ChooseTilesProps {
  sideImage: StaticImageData;
  tiles: TileItem[];
}

const CommonChooseTiles = ({ sideImage, tiles }: ChooseTilesProps) => {
  return (
    <div className="pt-6 gap-6 md:pt-11 grid grid-cols-1 lg:grid-cols-2 md:gap-11 items-center">
      
      {/* Left Side Image */}
      <div>
        <Image
          src={sideImage}
          alt="side-img"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Side Tiles */}
      <div className="grid  grid-cols-2 gap-6">
        {tiles.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <Image
              src={item.img}
              alt={item.heading}
              width={50}
              height={50}
            />

            <h3 className="pt-4 text-base md:text-xl font-semibold">
              {item.heading}
            </h3>

            <p className="pt-3 text-sm text-gray-600 leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonChooseTiles;