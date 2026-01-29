import { useState } from "react";

const projectData = {
  MONTRO: {
    title: "Montro",
    description:
      "A gamified expense-tracking app that helps young adults build better money habits through smart budgeting, clear insights, and real rewards.",
    role: "Product Designer",
    date: "Feb 2025",
    categories: ["User Experience Design", "Interaction Design", "Branding"],
    image: "src\\assets\\images\\montro_snapshot01.png",
  },
  PROLOG: {
    title: "ProLog",
    description:
      "TBA",
    role: "Product Lead",
    date: "Sep 2025",
    categories: [
      "User Experience Design",
      "Interaction Design",
      "Branding",
      "Development",
    ],
    image: "src\\assets\\images\\prolog_snapshot01.png",
  },
  SIDEQUEST: {
    title: "SideQuest",
    description:
      "TBA",
    role: "Product Designer",
    date: "Feb 2025",
    categories: [
      "User Interface Design",
      "User Experience Design",
      "Development",
    ],
    image: "src\\assets\\images\\sidequest_snapshot01.png",
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
          <img src={currentProject.image} alt={currentProject.title} />
        </div>
      </div>
    </>
  );
}
