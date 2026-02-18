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
        {/* <div className="scroll-text">
          <h6>Scroll Down</h6>
          <span className="material-symbols-outlined scroll-icon">
            arrow_downward
          </span>
        </div> */}
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
      {/* <ProjectSection sectionTitle="Domains of Knowledge">
        <div className="domain-grid">
          <div className="domain-skill-box">
            <div className="domain-red-overlay"></div>
            <h3>User Experience</h3>
            <img />
          </div>
          <div className="domain-skill-box">
            <div className="domain-red-overlay"></div>
            <h3>Visual Identity</h3>
            <img />
          </div>
          <div className="domain-skill-box">
            <div className="domain-red-overlay"></div>
            <h3>Packaging</h3>
            <img />
          </div>
          <div className="domain-skill-box">
            <div className="domain-red-overlay"></div>
            <h3>Graphics</h3>
            <img />
          </div>
        </div>
      </ProjectSection> */}
      <ProjectSection sectionTitle="About Me">
        <div className="about-me">
          <img src="/images/my_photo.jpg" alt="hidayats photo" />
          <div className="about-me-content">
            <h1>Creative Enthusiast & Passionate Maker</h1>
            <h4>
              description about myself description about myself description
              about myself description about myself
            </h4>
            <div className="project-meta-data">
              <div className="metadata-container">
                <h5 className="metadata-title">Name</h5>
                <h5 className="metadata-content">Hidayat Patil</h5>
              </div>
              <div className="metadata-container">
                <h5 className="metadata-title">Date of Birth</h5>
                <h5 className="metadata-content">90's something</h5>
              </div>
              <div className="metadata-container">
                <h5 className="metadata-title">Hobbies</h5>
                <div className="metadata-content-multiple">
                  <h5 className="metadata-content">
                    Sketching | Painting | Sculpting
                  </h5>
                  <h5 className="metadata-content">Knitting | Stitching</h5>
                  <h5 className="metadata-content">
                    Cooking | Baking | Love Desserts
                  </h5>
                  <h5 className="metadata-content">
                    Hiking | Sports | Weights
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>
    </>
  );
}
