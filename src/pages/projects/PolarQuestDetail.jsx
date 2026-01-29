import BlurText from "../../components/BlurText";
import ProjectSection from "../../components/ProjectSection";

export default function PolarQuestDetail() {
  return (
    <>
      <div className="hero-banner">
        <BlurText
          text="Polar Quest"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <BlurText
          text="Magazine Design"
          delay={150}
          direction="top"
          animateBy="words"
          stepDuration={0.4}
          className="hero-title"
        />
      </div>
      <ProjectSection sectionTitle="Project Overview">
        <div className="project-detail-content">
          <p>Polar Quest magazine design project details...</p>
          {/* Add more project details here */}
        </div>
      </ProjectSection>
    </>
  );
}