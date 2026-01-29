import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navigation({ className = '' }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const isDetailPage = location.pathname.includes('/projects/');

  const handleBackClick = () => {
    navigate('/projects');
  };

  if (isDetailPage) {
    return (
      <div className={`nav-bar ${className}`}>
        <div className="back-button" onClick={handleBackClick}>
          <span className="material-symbols-outlined">arrow_back</span>
          <h4>BACK</h4>
        </div>
        <div></div> {/* Empty div to maintain layout */}
      </div>
    );
  }

  return (
    <div className={`nav-bar ${className}`}>
      <div className="hidayat_title">
        <img />
        <h4>HIDAYAT</h4>
      </div>
      <div className="site-pages-nav">
        <Link to="/">
          <h4 className={isCurrentPage('/') ? 'current-page' : ''}>HOME</h4>
        </Link>
        <Link to="/projects">
          <h4 className={isCurrentPage('/projects') ? 'current-page' : ''}>PROJECTS</h4>
        </Link>
        <Link to="/case-studies">
          <h4 className={isCurrentPage('/case-studies') ? 'current-page' : ''}>CASE STUDIES</h4>
        </Link>
        <Link to="/contact">
          <h4 className={isCurrentPage('/contact') ? 'current-page' : ''}>CONTACT ME</h4>
        </Link>
      </div>
    </div>
  );
}