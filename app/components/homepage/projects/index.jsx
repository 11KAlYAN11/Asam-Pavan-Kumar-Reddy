import { projectsData } from '@/utils/data/projects-data';
import Reveal from '../../helper/reveal';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-8 lg:my-14">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-fuchsia-500 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30 floating-orb-slow"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2a1330] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md font-display tracking-wide">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#2a1330]"></span>
        </div>
      </div>

      <div className="pt-14">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 6).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <Reveal amount={0.1}>
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] hover:shadow-[0_0_40px_-5px_rgba(217,70,239,0.35)]">
                  <ProjectCard project={project} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;