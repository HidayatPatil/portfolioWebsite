import ProjectSection from "../../components/ProjectSection";

export default function PolarQuestDetail() {
  return (
    <>
      <div className="project-header">
        <div className="project-header-title">
          <h1>Polar Quest</h1>
          <p>
            Editorial Magazine Design. An immersive magazine concept inspired by
            an 11-day expedition to the South Pole.
          </p>
        </div>
        <div className="project-meta-data">
          <div className="metadata-container">
            <h5 className="metadata-title">Role</h5>
            <h5 className="metadata-content">Individual Project</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Date</h5>
            <h5 className="metadata-content">Sep 2025</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Categories</h5>
            <div className="metadata-content-multiple">
              <h5 className="metadata-content">Graphics</h5>
              <h5 className="metadata-content">Printing</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="project-introduction">
        <div className="project-content-container">
          <p>
            Polar Quest is a conceptual editorial magazine inspired by an 11-day
            expedition to Antarctica, based on G Adventures’ Antarctica Classic
            journey. The project explores how editorial design can convey the
            scale, isolation, and emotional intensity of traveling to the South
            Pole.
          </p>
          <p>
            The magazine combines immersive imagery,{" "}
            <b>strong typographic hierarchy</b>, and <b>structured layouts</b>{" "}
            to <b>balance storytelling</b> with informational content. The goal
            was to translate a real-world travel experience into a visually
            engaging narrative that captures both the adventure and the
            atmosphere of one of the most remote destinations on Earth.
          </p>
        </div>
        <img src="/images/magazine_01.png" alt="Montro app screenshot" />
      </div>
      <ProjectSection sectionTitle="Project Brief">
        <div className="project-brief-content">
          <div className="project-content-container">
            <p>
              To design a travel magazine that transforms an existing expedition
              package into a compelling editorial experience, focusing on mood,
              storytelling, and visual impact rather than traditional travel
              promotion.
            </p>
            <p>
              A magazine concept that demonstrates how editorial design can
              elevate travel content by communicating emotion, anticipation, and
              a sense of exploration, while maintaining clarity and readability.
            </p>
          </div>
          <div className="polarQuest-grid">
            <img className="polarQuest01" src="/images/magazine_02.png" alt="Montro app screenshot" />
            <img className="polarQuest02" src="/images/magazine_04.png" alt="Montro app screenshot" />
            <img className="polarQuest03" src="/images/magazine_03.png" alt="Montro app screenshot" />
            <div className="online-reader">
              <div style={{position:"relative", paddingTop:"max(60%,324px)", width:"100%", height:"0"}}>
                <iframe
                  style={{position:"absolute", border:"none", width:"100%", height:"100%", left:"0", top:"0"}}
                  src="https://online.fliphtml5.com/lkevp/sample/"
                  title="sample"
                  seamless="seamless"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency="true"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
            <img className="polarQuest04" src="/images/magazine_05.png" alt="Montro app screenshot" />
          </div>
          <h1 className="project-end-quote">In a place untouched, perspective is everything.</h1>
        </div>
      </ProjectSection>
    </>
  );
}
