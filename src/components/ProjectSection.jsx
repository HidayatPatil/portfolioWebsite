export default function ProjectSection({ sectionTitle, children }) {
  return (
    <div className="project-section">
      <div className="section-title">{sectionTitle}</div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
}