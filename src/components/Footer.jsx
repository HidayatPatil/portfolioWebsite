import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="main-content-body">
        <div className="hidayat_title">
          <img src='/images/SVG/logo_black.svg' alt='Logo' />
          <h4>HIDAYAT</h4>
        </div>
        <div className="page-links">
          <Link to="/">
            <h4>HOME</h4>
          </Link>
          <Link to="/projects">
            <h4>PROJECTS</h4>
          </Link>
          {/* <Link to="/case-studies">
            <h4>CASE STUDIES</h4>
          </Link> */}
          <Link to="/contact">
            <h4>CONTACT ME</h4>
          </Link>
        </div>
      </div>
      <div className='silly-quote'>
        <p>Get in Touch if you want cool shit for your company!</p>
      </div>
    </div>
  );
}
