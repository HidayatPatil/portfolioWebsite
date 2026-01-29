import BlurText from "../../components/BlurText";
import ProjectSection from "../../components/ProjectSection";

export default function MontroDetail() {
  return (
    <>
      <div className="project-header">
        <div className="project-header-title">
          <h1>Montro</h1>
          <p>
            A gamified expense-tracking app that helps young adults build better
            money habits through smart budgeting, clear insights, and real
            rewards.
          </p>
        </div>
        <div className="project-meta-data">
          <div className="metadata-container">
            <h5 className="metadata-title">Role</h5>
            <h5 className="metadata-content">Product Designer</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Date</h5>
            <h5 className="metadata-content">Feb 2025</h5>
          </div>
          <div className="metadata-container">
            <h5 className="metadata-title">Categories</h5>
            <div className="metadata-content-multiple">
              <h5 className="metadata-content">User Experience Designer</h5>
              <h5 className="metadata-content">Interaction Design</h5>
              <h5 className="metadata-content">Branding</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="project-introduction">
        <div className="project-content-container">
          <p>
            Montro is a mobile expense-tracking app designed to help young
            adults manage their money more confidently.
          </p>
          <p>
            The app simplifies budgeting, reduces the friction of tracking daily
            expenses, and encourages long-term habit building through
            gamification and rewards. By combining ease of use with motivation,
            Montro turns a typically stressful task into a more engaging and
            sustainable experience.
          </p>
        </div>
        <img src="/src/assets/images/montro_snapshot01.png" alt="Montro app screenshot" />
      </div>
      <ProjectSection sectionTitle="Project Timeline">
        <div className="project-detail-content">
          {/* Add more project details here */}
        </div>
      </ProjectSection>
    </>
  );
}
