// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reveal from "../../helper/reveal";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-lime-400 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 floating-orb"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent  w-full" />
        </div>
      </div>

      <Reveal>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#2a1330]"></span>
            <span className="bg-[#2a1330] w-fit text-white p-2 px-5 text-xl rounded-md">
              Skills
            </span>
            <span className="w-24 h-[2px] bg-[#2a1330]"></span>
          </div>
        </div>
      </Reveal>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const skillImg = skillsImage(skill);
            return (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-fuchsia-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10 flex items-center justify-center">
                    {skillImg ? (
                      <Image
                        src={skillImg.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    ) : (
                      <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-lime-400 text-[#0d1224] text-xs font-bold">
                        {skill.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          )})}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
