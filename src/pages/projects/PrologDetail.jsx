import BlurText from "../../components/BlurText";
import ProjectSection from "../../components/ProjectSection";

export default function PrologDetail() {
  return (
    <>
      <div className="hero-banner">
        <BlurText
          text="ProLog"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <BlurText
          text="Project Description"
          delay={150}
          direction="top"
          animateBy="words"
          stepDuration={0.4}
          className="hero-title"
        />
      </div>
      <ProjectSection sectionTitle="Project Overview">
        <div className="project-detail-content">
          <p>ProLog project details coming soon...</p>
          {/* Add more project details here */}
        </div>
      </ProjectSection>
    </>
  );
}