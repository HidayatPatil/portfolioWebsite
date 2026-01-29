import BlurText from "../components/BlurText";
import ProjectSection from "../components/ProjectSection";
import ProjectThumbnail from "../components/ProjectThumbnail";

export default function Projects() {
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
          <h4>ALL</h4>
          <h4>UX/UI</h4>
          <h4>BRANDING</h4>
          <h4>GRAPHICS</h4>
        </div>
        <div className="all-projects-container">
          <div className="montro">
            <ProjectThumbnail 
              title="Montro"
              description="A gamified expense-tracking app that helps young adults build better money habits through smart budgeting, clear insights, and real rewards."
              imageSrc="/images/montro_snapshot01.png"
              imageAlt="Montro app screenshot"
              projectRoute="/projects/montro"
            />
          </div>
          <div className="prolog">
            <ProjectThumbnail 
              title="ProLog"
              description="desc."
              imageSrc=""
              imageAlt="ProLog project"
              projectRoute="/projects/prolog"
            />
          </div>
          <div className="polarQuest">
            <ProjectThumbnail 
              title="Polar Quest"
              description="desc."
              imageSrc="/images/magazine_01.png"
              imageAlt="Polar Quest magazine"
              projectRoute="/projects/polar-quest"
            />
          </div>
          <div className="heartyMeals">
            <ProjectThumbnail 
              title="Hearty Meals"
              description="desc."
              imageSrc="/images/can_02.png"
              imageAlt="Hearty Meals product"
              projectRoute="/projects/hearty-meals"
            />
          </div>
          <div className="ustraa">
            <ProjectThumbnail 
              title="Ustraa"
              description="Desc."
              imageSrc=" "
              imageAlt="Ustraa project"
              projectRoute="/projects/ustraa"
            />
          </div>
        </div>
      </ProjectSection>
    </>
  );
}
