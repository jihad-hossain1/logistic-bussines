import Image from "next/image";
import React from "react";
import logoImage from "@/public/logo.png";

const Logo = () => {
  return (
    <div className="lg:text-3xl font-bold">
      <Image src={logoImage.src} alt="logo" width={50} height={50} />
    </div>
  );
};

export default Logo;
