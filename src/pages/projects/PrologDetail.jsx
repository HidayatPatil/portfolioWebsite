import ProjectSection from "../../components/ProjectSection";

export default function MontroDetail() {
  return (
    <>
      <div className="project-header">
        <div className="project-header-title">
          <h1>ProLog</h1>
          <p>
            Making the skilled trades apprenticeship journey visible,
            structured, and achievable every step of the way.
          </p>
        </div>
        <div className="project-meta-data">
          <div className="metadata-container">
            <h5 className="metadata-title">Role</h5>
            <h5 className="metadata-content">Product Lead</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Date</h5>
            <h5 className="metadata-content">Sep 2025</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Categories</h5>
            <div className="metadata-content-multiple">
              <h5 className="metadata-content">User Experience Designer</h5>
              <h5 className="metadata-content">Interaction Design</h5>
              <h5 className="metadata-content">Branding</h5>
              <h5 className="metadata-content">Development</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="project-introduction">
        <div className="project-content-container">
          <p>
            Project Case Study Coming Soon......
          </p>
        </div>
        <img src="/images/prolog02.png" alt="Montro app screenshot" />
      </div>
    </>
  );
}
