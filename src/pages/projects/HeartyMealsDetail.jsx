import ProjectSection from "../../components/ProjectSection";

export default function HeartyMealsDetail() {
  return (
    <>
      <div className="project-header">
        <div className="project-header-title">
          <h1>Hearty Meals</h1>
          <p>
            A warm, all-natural soup designed for on-the-go consumption from
            heated vending machines.
          </p>
        </div>
        <div className="project-meta-data">
          <div className="metadata-container">
            <h5 className="metadata-title">Role</h5>
            <h5 className="metadata-content">Individual Project</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Date</h5>
            <h5 className="metadata-content">Oct 2025</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Categories</h5>
            <div className="metadata-content-multiple">
              <h5 className="metadata-content">Packaging</h5>
              <h5 className="metadata-content">Graphics</h5>
              <h5 className="metadata-content">Printing</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="project-introduction">
        <div className="project-content-container">
          <p>
            <b>Hearty Meals</b> is a conceptual soup can design created for{" "}
            <b>heated vending machines</b>, offering a convenient and comforting
            meal that can be enjoyed on the go. The product is positioned as a
            wholesome alternative to typical vending machine food, made with
            all-natural ingredients and designed to maintain a long shelf life.
          </p>
          <p>
            The visual design highlights transparency and trust through{" "}
            <b>ingredient-led imagery</b>, showcasing both the soup inside and
            the raw ingredients used in each flavor. The packaging balances
            warmth, clarity, and practicality while remaining visually engaging
            in a fast-paced, grab-and-go environment.
          </p>
        </div>
        <img src="/images/can_02.png" alt="hearty meals can" />
      </div>
      <ProjectSection sectionTitle="Project Brief">
        <div className="project-brief-content">
          <div className="project-content-container">
            <p>
              To design a soup can that feels warm, natural, and trustworthy
              while standing out in a vending machine context and clearly
              communicating flavor, ingredients, and usability.
            </p>
          </div>
          <div className="project-content-container">
            <h3>Design Approach</h3>
            <p>
              I focused on transparency as the core visual strategy. The
              packaging showcases both the soup itself and the raw ingredients
              in each flavor, building trust through visibility. The design
              balances warmth and clarity—approachable enough to feel
              comforting, but clean and direct enough for split-second choices.
            </p>
            <p>
              The result is a cohesive system that elevates an everyday vending
              machine product by prioritizing honest communication and appetite
              appeal.
            </p>
          </div>
          <div className="hearty-grid">
            <img className="can01" src="/images/can_dieline.png" alt="can dieline graphics" />
            <img className="can02" src="/images/can_01.png" alt="can mockup" />
          </div>
          <h1 className="project-end-quote">Warmth, clarity, honesty. Even in a can.</h1>
        </div>
      </ProjectSection>
    </>
  );
}
