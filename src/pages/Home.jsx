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
          <h6>(Website Still under progress)</h6>
          {/* <span className="material-symbols-outlined scroll-icon">
            arrow_downward
          </span> */}
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
      <ProjectSection sectionTitle="Featured Projects">
        <InteractiveProjectSelector />
      </ProjectSection>
      <ProjectSection sectionTitle="Domains of Knowledge">
        <div className="domain-grid"></div>
      </ProjectSection>
      <ProjectSection sectionTitle="About Me">
        <div className="about-me">
          <div className="about-me-content">
            <h1>Creative Designer & Passionate Maker</h1>
            <div className="about-me-para">
              <h4>
                Ever since I was a kid, I've loved creating things with my own
                hands—cardboard, clay, papier-mâché, sheet metal, you name it.
                I've always been a practical and hands-on person, which sparked
                my interest in creating products, both tangible and intangible.
                I have a lot of interests, and funnily enough, my hobby is
                collecting and exploring other hobbies. If you want to sit down
                and have a fun chat, connect with me via <a href="https://www.linkedin.com/in/hidayat-patil/" target="_blank">LinkedIn!</a>
              </h4>
            </div>
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
          <div className="about-me-image">
            <img src="/images/my_photo.jpg" alt="hidayats photo" />
          </div>
        </div>
      </ProjectSection>
    </>
  );
}
