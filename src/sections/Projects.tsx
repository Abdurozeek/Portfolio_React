import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/somke.png",
      projectName: "Backpack model",
      projectLink: "https://github.com/Abdurozeek/Star_wars",
      projectDescription:
        "Это 3D модель рюкзака, созданного в программе 3Ds Max. При создании данного объекта были использованы разные методы полигонального моделирования, такие как PolyDraw и PaintDeform. Данная работа продемонстрировала преимущества в использовании инструмента Line и Cut, который расширяет способности полигонов.",
      projectTech: [
        "3D",
        "PolyDraw",
        "PaintDeform",
        "Duplicating",
        "Loops",
        "Turbosmooth",
      ],
      projectExternalLinks: {
        github: "https://github.com/Abdurozeek/Star_wars",
        externalLink: "https://github.com/Abdurozeek/Star_wars",
      },
    },
    {
      image: "/project2.png",
      projectName: "WebPack Configuration",
      projectLink: "https://github.com/Abdurozeek/Star_wars",
      projectDescription:
        "Это приложение для чата, созданное с помощью React и Node.js которое отправляет сообщения в режиме реального времени и обладает высокой масштабируемостью. Оно использует передовые концепции JavaScript, такие как debouncing, и оптимизировано для React.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Abdurozeek/calculator_react",
        externalLink: "https://github.com/Abdurozeek/calculator_react",
      },
    },
    {
      image: "/project3.png",
      projectName: "Netflix App",
      projectLink: "https://github.com/Abdurozeek/Gallery",
      projectDescription:
        "Я сделал копию Netflix с помощью TMDB API. Он имеет бесконечную прокрутку и позволяет просматривать фильмы по жанрам. Вы также можете добавлять фильмы в свой список избранных.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/Abdurozeek/Gallery",
        externalLink: "https://github.com/Abdurozeek/Gallery",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Мои проекты</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
