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
            The visual design highlights transparency and trust through <b>ingredient-led imagery</b>, showcasing both the soup inside and
            the raw ingredients used in each flavor. The packaging balances
            warmth, clarity, and practicality while remaining visually engaging
            in a fast-paced, grab-and-go environment.
          </p>
        </div>
        <img src="" alt="ustraa packaging" />
      </div>
      <ProjectSection sectionTitle="Project Brief">
        <div className="project-brief-content">
          <div className="project-content-container">
            <p>
              To design a soup can that feels warm, natural, and trustworthy
              while standing out in a vending machine context and clearly
              communicating flavor, ingredients, and usability.
            </p>
            <p>
              A cohesive packaging concept that demonstrates how visual design
              can elevate everyday food products by combining clarity, appetite
              appeal, and functional context, tailored for quick decision-making
              and on-the-go use.
            </p>
          </div>
          <div className="ustraa-grid">
            <img className="ustraa01" src="" alt="ustraa packaging" />
            <img className="ustraa01" src="" alt="ustraa packaging" />
            <img className="ustraat03" src="" alt="ustraa packaging" />
            <img className="ustraa04" src="" alt="ustraa packaging" />
          </div>
          <h1 className="project-end-quote">
            Yummy in my Tummy
          </h1>
        </div>
      </ProjectSection>
    </>
  );
}
