"use client";
import React, { useState } from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const [logoTitle, setLogoTitle] = useState();
  return (
    <div className="flex items-center mt-6 md:mt-14 flex-col gap-4 md:gap-10">
      <h2 className="text-pink-600 text-3xl md:text-6xl font-bold">
        {Lookup.HeroHeading}
      </h2>
      <h2 className="text-xl text-center md:text-4xl font-bold">
        {Lookup.HeroSubheading}
      </h2>
      <p className="text-xs md:text-lg text-center text-gray-500">
        {Lookup.HeroDesc}
      </p>

      <div className="flex gap-6 w-full justify-center max-w-2xl">
        <Link
          className="border-2 border-white hover:border-black hover:rounded-sm"
          href={"/create?title=" + logoTitle}
        >
          <Button className="bg-red-500 p-6 ">Get Started</Button>
        </Link>
      </div>
      <div className="border-2 p-2 rounded-lg">
        <p className="text-center mb-4 text-sm md:text-xl border p-1 rounded-lg bg-amber-900 text-white">
          Preview of Premium Logos Generated.
        </p>
        <div className="w-[400] md:w-[800]">
          <Image
            src={"/landing.png"}
            alt="landing"
            width={800}
            height={800}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
