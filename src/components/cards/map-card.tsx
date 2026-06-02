import CardWrapper from "./card-wrapper";
import Image from "next/image";

const MapCard = () => {
  return (
    <CardWrapper>
      <Image
        className={"h-full w-full bg-center rounded-3xl object-cover"}
        src="/map.png"
        alt="map"
        width={300}
        height={300}
      />
    </CardWrapper>
  );
};

export default MapCard;
