// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Reveal from "../../helper/reveal";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#2a1330] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#2a1330]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <Reveal direction="left" className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-lime-400 text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </Reveal>
        <Reveal direction="right" delay={0.15} className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt={personalData.name}
            className="rounded-lg transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110 hover:shadow-[0_0_40px_-5px_rgba(217,70,239,0.6)] cursor-pointer"
          />
        </Reveal>
      </div>
    </div>
  );
};

export default AboutSection;
