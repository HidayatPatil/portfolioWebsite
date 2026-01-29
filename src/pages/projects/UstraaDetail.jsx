import BlurText from "../../components/BlurText";
import ProjectSection from "../../components/ProjectSection";

export default function UstraaDetail() {
  return (
    <>
      <div className="hero-banner">
        <BlurText
          text="Ustraa"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <BlurText
          text="Brand Project"
          delay={150}
          direction="top"
          animateBy="words"
          stepDuration={0.4}
          className="hero-title"
        />
      </div>
      <ProjectSection sectionTitle="Project Overview">
        <div className="project-detail-content">
          <p>Ustraa brand project details...</p>
          {/* Add more project details here */}
        </div>
      </ProjectSection>
    </>
  );
}