"use client";

import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "../../helper/reveal";


function AboutSection() {
  return (
    <div id="about" className="my-8 lg:my-12 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#2a1330] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md font-display tracking-wide">
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
        <div className="flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 28, filter: "grayscale(1)", scale: 1 }}
            whileInView={{ opacity: 1, x: 0, filter: "grayscale(0)", scale: 1.06 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ scale: 1.14 }}
            className="rounded-lg cursor-pointer shadow-[0_0_40px_-5px_rgba(217,70,239,0.6)]"
          >
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt={personalData.name}
              className="rounded-lg block"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
