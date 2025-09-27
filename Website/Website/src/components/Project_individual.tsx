import { useRef } from "react";
import SvgSelector from "../assets/SvgSelector";
import ProjectTemplate from "./ProjectTemplate";
import { motion } from "motion/react";

interface ProjectProps {
  title: string;
  id: number;
  stack: string[];
  /**
   * @props {string} - link for the website or github link
   */
  link?: string[];
}

const Project_individual = ({ title, id, stack, link }: ProjectProps) => {
  const svgDiv = useRef<HTMLDivElement | null>(null);
  const projectDiv = useRef<HTMLDivElement | null>(null);

  const handleClickProject = () => {
    svgDiv.current?.classList.toggle("-rotate-180");
    svgDiv.current?.classList.toggle("-translate-x-1.5");
    projectDiv.current?.classList.toggle("h-[510px]");
  };

  const projectToRender = (id: number) => {
    switch (id) {
      case 1:
        return (
          <ProjectTemplate
            title="A Holistic Therapy Website"
            brief="I designed and developed a responsive website for a holistic
          therapist, focusing on a calm, brand-aligned experience."
            bulletPoints={[
              "Built with React, TypeScript, Tailwind CSS.",
              "Structured content with semantic HTML for accessibility and SEO.",
              "Created reusable components and responsive layouts.",
              "Integrated a simple contact/booking form.",
              "Optimized images and performance for fast mobile load.",
              "Deployed via Git workflow.",
              "Delivered using an Agile approach: held several client meetings, iterated on feedback, and ensured smooth delivery.",
              "Added the company to Google Maps and set up a basic database for business information.",
            ]}
            images_info={[
              {
                address: "./src/assets/projects/atelier_services.png",
                alt: "Part of the available services",
              },
              {
                address: "./src/assets/projects/Atelier da Essência.png",
                alt: "Site inicial page",
              },
              {
                address: "./src/assets/projects/atelier_eventos.png",
                alt: "events page",
              },
              {
                address: "./src/assets/projects/atelier_all_services.png",
                alt: "all services page",
              },
              {
                address: "./src/assets/projects/atelier_about_me_footer.png",
                alt: "a piece of about me and the footer",
              },
            ]}
            carouselCss="w-full lg:h-[400px] h-[250px]"
          />
        );
      case 2:
        return (
          <ProjectTemplate
            title="E-commerce Features Development"
            brief="I developed new e-commerce functionalities to enhance customer experience and improve client results."
            bulletPoints={[
              "Implemented fast-buy, shop filters, bundle product pages, and new grid views",
              "Built with React, Preact, TypeScript, Tailwind CSS, HTML.",
              "Focused on clean UI, accessibility, and performance optimization.",
              "Structured reusable components to ensure scalability and maintainability.",
              "Delivered through an iterative process, collaborating with stakeholders to refine features.",
            ]}
            images_info={[
              {
                address: "./src/assets/projects/aviator_fastbuy_smartphone.gif",
                alt: "Fast buy smartphone GIF",
              },
              {
                address: "./src/assets/projects/aviator_fastbuy.gif",
                alt: "Fast buy animation GIF",
              },
              {
                address: "./src/assets/projects/aviator_applying_filter.gif",
                alt: "Applying filter GIF",
              },
              {
                address: "./src/assets/projects/aviator_filter.png",
                alt: "Sort feature",
              },
            ]}
          />
        );
      case 3:
        return (
          <ProjectTemplate
            title="CS50 Web Final Project"
            brief="I built a full-stack web application as my final project for CS50 Web, applying web fundamentals and deploying a working product."
            bulletPoints={[
              "Developed core features such as authentication, CRUD operations, dynamic views, and API integrations.",
              "Built with Django, JavaScript, HTML and CSS.",
              "Ensured responsive layouts, client-server communication, and data persistence.",
              "Designed a modular front-end architecture using plain JavaScript (since frameworks like React were not allowed).",
              "Implemented a system where the user can add new posts and configure styling options such as color, font size, image size, and borders.",
            ]}
            video={
              <iframe
                className="sm:basis-1/2 pb-4 rounded-sm max-sm:pt-2"
                src="https://www.youtube.com/embed/umRPNgarDkw?si=fvILWiyreFVymjYw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
          />
        );
      case 4:
        return (
          <ProjectTemplate
            title="CS50 Web Network"
            brief="I built a full-stack web application for a social network as my final project for CS50 Web, applying web fundamentals and deploying a working product."
            bulletPoints={[
              "Developed core features such as authentication, CRUD operations for posts, and dynamic views for different content feeds.",
              "Built with Django, JavaScript (no frameworks), HTML, CSS, and SQL.",
              "Ensured responsive layouts, client-server communication via a custom API, and data persistence using a database.",
              "Designed a modular front-end architecture using plain JavaScript to handle user interactions and dynamically update the page.",
              "Implemented a system where users can create, edit, and like posts, as well as follow and unfollow other users. Pagination was added to manage large amounts of content efficiently.",
            ]}
            video={
              <iframe
                className="sm:basis-1/2 pb-4 rounded-sm max-sm:pt-2 h-[400px]"
                src="https://www.youtube.com/embed/jd9w08nGSPA?si=juLKntIjDkRy9NFU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
          />
        );
    }
  };

  return (
    <motion.div
      className="p-0.5 flex flex-col project"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.08, once: true }}
      transition={{ duration: 1, type: "spring" }}
    >
      <button
        className="flex gap-x-2 items-center cursor-pointer"
        onClick={handleClickProject}
      >
        <h3 className="text-2xl text-amber-50 font-bold flex">{title}</h3>
        <div ref={svgDiv} className="translate-y-1">
          <SvgSelector
            svgName="arrowdown"
            cssClass="w-[24px] h-[24px]"
            color="fill-amber-50"
          />
        </div>
      </button>
      <hr className="w-full border-neutral-500" />
      <div
        ref={projectDiv}
        className="h-0 overflow-scroll overflow-x-hidden transition-all duration-200 ease-in-out flex flex-col gap-y-2"
      >
        <div className="flex gap-x-2 pt-2 ">
          <p className="text-amber-50 font-bold text-sm underline">Stack: </p>
          <div className="flex gap-x-2  flex-wrap gap-y-2">
            {stack.map((item, index) => (
              <p
                key={index}
                className="text-[0.7rem] text-amber-50 p-[0.2rem_1rem] rounded-lg bg-badge font-bold"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        {link && (
          <div className="flex gap-x-3 relative items-center flex-wrap">
            <p className="text-amber-50 font-bold text-sm underline">
              {link.length == 1 ? "Link" : "Links"}:
            </p>
            {link.map((item, index) => (
              <a
                key={index + item.length}
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-50 transtion-all duration-300 ease-in-out hover:text-green-400 break-all"
              >
                {item}
              </a>
            ))}
          </div>
        )}
        <div className="pt-4">{projectToRender(id)}</div>
      </div>
    </motion.div>
  );
};

export default Project_individual;
