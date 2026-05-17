import React from "react";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="https://livinnza.com/livinnza-logo-light.png"
        alt="Livinnza"
        width={170}
        height={54}
        priority
        className="h-11 w-auto"
      />
    </div>
  );
};

export { Logo };
