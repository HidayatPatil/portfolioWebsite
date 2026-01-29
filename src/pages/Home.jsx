import BlurText from "../components/BlurText";
import ProjectSection from "../components/ProjectSection";
import InteractiveProjectSelector from "../components/InteractiveProjectSelector";
import ScrollVelocity from "../components/ScrollVelocity";

export default function Home() {
  return (
    <>
      <div className="hero-banner">
        <BlurText
          text="Creative Solutions"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <BlurText
          text="That Serve A Purpose"
          delay={100}
          direction="top"
          animateBy="characters"
          stepDuration={0.4}
          className="hero-title"
        />
        <div className="scroll-text">
          <h6>Scroll Down</h6>
          <span className="material-symbols-outlined scroll-icon">
            arrow_downward
          </span>
        </div>
      </div>
      <div className="rotation-band">
        <ScrollVelocity
          texts={[
            "Creative Solutions\u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0Exciting Visuals\u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0Innovative Creations\u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0",
          ]}
          velocity={50}
          className="rotation-band-text"
        />
      </div>
      <ProjectSection sectionTitle="Top Projects">
        <InteractiveProjectSelector />
      </ProjectSection>
      <ProjectSection sectionTitle="Domains of Knowledge">
        <div className="domain-gridbox">
          <div className=""></div>
        </div>
      </ProjectSection>
    </>
  );
}
