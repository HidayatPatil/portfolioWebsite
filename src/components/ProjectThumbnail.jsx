import { useNavigate } from 'react-router-dom';

export default function ProjectThumbnail({ title, description, imageSrc, imageAlt, projectRoute, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (projectRoute) {
      navigate(projectRoute);
    }
  };

  return (
    <div className="project-thumbnail-wrapper" onClick={handleClick} style={{ cursor: projectRoute ? 'pointer' : 'default' }}>
      <div className="project-thumbnail">
        <h3>{title}</h3>
        <h5 className="project-description">{description}</h5>
      </div>
      <div className="gradientBack"></div>
      <img src={imageSrc} alt={imageAlt || title} />
    </div>
  );
}