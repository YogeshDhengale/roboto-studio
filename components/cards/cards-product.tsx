import Image from "next/image";
import React from "react";

type CardProductProps = {
  src: string;
  width: number;
  height: number;
  title: string;
  subTitle: string;
};

const CardProduct = ({
  src,
  width,
  height,
  title,
  subTitle,
}: CardProductProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={src} width={width} height={height} alt={title} />
      <p className="text-lg font-bold text-center mt-3.5">{title}</p>
      <p className="text-base font-medium text-center mt-2">{subTitle}</p>
    </div>
  );
};

export default CardProduct;
