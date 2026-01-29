import BlurText from "../../components/BlurText";
import ProjectSection from "../../components/ProjectSection";

export default function HeartyMealsDetail() {
  return (
    <>
      <div className="hero-banner">
        <BlurText
          text="Hearty Meals"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <BlurText
          text="Product Design"
          delay={150}
          direction="top"
          animateBy="words"
          stepDuration={0.4}
          className="hero-title"
        />
      </div>
      <ProjectSection sectionTitle="Project Overview">
        <div className="project-detail-content">
          <p>Hearty Meals product design project details...</p>
          {/* Add more project details here */}
        </div>
      </ProjectSection>
    </>
  );
}