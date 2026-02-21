import { useState } from "react";
import BlurText from "../components/BlurText";
import ProjectSection from "../components/ProjectSection";
import ProjectThumbnail from "../components/ProjectThumbnail";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const projects = [
    {
      id: "montro",
      title: "Montro",
      description: "A gamified expense-tracking app that helps young adults build better money habits through smart budgeting, clear insights, and real rewards.",
      imageSrc: "/images/montro_snapshot01.png",
      imageAlt: "Montro app screenshot",
      projectRoute: "/projects/montro",
      category: "UX/UI"
    },
    {
      id: "prolog",
      title: "ProLog",
      description: "Making the skilled trades apprenticeship journey visible, structured, and achievable every step of the way. (Coming Soon..)",
      imageSrc: "/images/prolog02.png",
      imageAlt: "ProLog project",
      projectRoute: "/projects/prolog",
      category: "UX/UI"
    },
    {
      id: "polarQuest",
      title: "Polar Quest",
      description: "Editorial Magazine Design. An immersive magazine concept inspired by an 11-day expedition to the South Pole.",
      imageSrc: "/images/magazine_01.png",
      imageAlt: "Polar Quest magazine",
      projectRoute: "/projects/polar-quest",
      category: "GRAPHICS"
    },
    {
      id: "heartyMeals",
      title: "Hearty Meals",
      description: "A warm, all-natural soup designed for on-the-go consumption from heated vending machines.",
      imageSrc: "/images/can_02.png",
      imageAlt: "Hearty Meals product",
      projectRoute: "/projects/hearty-meals",
      category: "GRAPHICS"
    },
    {
      id: "ustraa",
      title: "Ustraa",
      description: "A single-material packaging concept designed to reduce waste from plastic blade cartridges.",
      imageSrc: "/images/ustraa_thumnail.jpg",
      imageAlt: "Ustraa project",
      projectRoute: "/projects/ustraa",
      category: "GRAPHICS"
    }
  ];

  const filteredProjects = selectedCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <div className="hero-banner">
        <BlurText
          text="All Creations"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <BlurText
          text="Have A Beginning"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        {/* <BlurText
          text="A Purpose"
          delay={150}
          direction="top"
          animateBy="words"
          stepDuration={0.4}
          className="hero-title"
        /> */}
      </div>
      <ProjectSection sectionTitle="All Projects">
        <div className="top-project-selection">
          <h4 
            className={selectedCategory === "ALL" ? "selected" : ""}
            onClick={() => setSelectedCategory("ALL")}
          >
            ALL
          </h4>
          <h4 
            className={selectedCategory === "UX/UI" ? "selected" : ""}
            onClick={() => setSelectedCategory("UX/UI")}
          >
            UX/UI
          </h4>
          <h4 
            className={selectedCategory === "GRAPHICS" ? "selected" : ""}
            onClick={() => setSelectedCategory("GRAPHICS")}
          >
            GRAPHICS
          </h4>
        </div>
        <div className={`all-projects-container ${selectedCategory.toLowerCase().replace('/', '-')}-view`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={project.id}>
              <ProjectThumbnail
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                projectRoute={project.projectRoute}
                category={project.category}
              />
            </div>
          ))}
        </div>
      </ProjectSection>
    </>
  );
}
