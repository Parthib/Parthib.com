import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import dayjs from 'dayjs';

const ProjectBubble = ({ data }) => (
  <div className="bubble">
    <Link to={data.link}>
      <div className="projTitle">
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="date">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </div>
    </Link>
    <div className="bubbleIcon">
      <a href={data.link}>
        <img src={data.image} alt={data.title} />
      </a>
    </div>
    <div className="bubbleDescription">
      <p>{data.synopsis}</p>
    </div>
  </div>
);

ProjectBubble.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectBubble;
