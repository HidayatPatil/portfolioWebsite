import { useState } from "react";
import { Link } from "react-router-dom";

const projectData = {
  MONTRO: {
    title: "Montro",
    description:
      "A gamified expense-tracking app that helps young adults build better money habits through smart budgeting, clear insights, and real rewards.",
    role: "Product Designer",
    date: "Feb 2025",
    categories: ["User Experience Design", "Interaction Design", "Branding"],
    image: "/images/montro_snapshot01.png",
    link: "/projects/montro",
  },
  PROLOG: {
    title: "ProLog",
    description:
      "Making the skilled trades apprenticeship journey visible, structured, and achievable every step of the way.",
    role: "Product Lead",
    date: "Sep 2025",
    categories: [
      "User Experience Design",
      "Interaction Design",
      "Branding",
      "Development",
    ],
    image: "/images/prolog02.png",
    link: "/projects/prolog",
  },
  POLARQUEST: {
    title: "Polar Quest",
    description:
      "Editorial Magazine Design. An immersive magazine concept inspired by an 11-day expedition to the South Pole.",
    role: "Individual Project",
    date: "Sep 2025",
    categories: ["Graphics", "Printing"],
    image: "/images/magazine_01.png",
    link: "/projects/polar-quest",
  },
};

export default function InteractiveProjectSelector() {
  const [selectedProject, setSelectedProject] = useState("MONTRO");
  const currentProject = projectData[selectedProject];

  return (
    <>
      <div className="top-project-selection">
        {Object.keys(projectData).map((projectKey) => (
          <h4
            key={projectKey}
            className={selectedProject === projectKey ? "selected" : ""}
            onClick={() => setSelectedProject(projectKey)}
          >
            {projectKey}
          </h4>
        ))}
      </div>
      <div className="project-top-display">
        <div className="project-section-content">
          <div className="project-info">
            <h2 className="project-title">{currentProject.title}</h2>
            <h5 className="project-description">
              {currentProject.description}
            </h5>
          </div>
          <div className="project-meta-data">
            <div className="metadata-container">
              <h5 className="metadata-title">Role</h5>
              <h5 className="metadata-content">{currentProject.role}</h5>
            </div>
            <div className="metadata-container">
              <h5 className="metadata-title">Date</h5>
              <h5 className="metadata-content">{currentProject.date}</h5>
            </div>
            <div className="metadata-container">
              <h5 className="metadata-title">Categories</h5>
              <div className="metadata-content-multiple">
                {currentProject.categories.map((category, index) => (
                  <h5 key={index} className="metadata-content">
                    {category}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="project-image">
          <Link to={currentProject.link}>
            <img src={currentProject.image} alt={currentProject.title} />
          </Link>
          <Link to={currentProject.link} className="project-image-button">
            VIEW PROJECT
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </>
  );
}
