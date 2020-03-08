import React, { useState } from "react"
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function handleClick(e) {
  e.preventDefault();
  window.history.back()
}

function Article(props) {

  const [markdownText, setMarkdown] = useState("");

  fetch(props.markdown)
    .then(response => response.text())
    .then(
      text => {
        setMarkdown(text);
      }
    );

  return (
    <div className="content" id="article">
      <a href='#' onClick={handleClick} className="back">
        <FontAwesomeIcon icon={faArrowCircleLeft}/>
      </a>
      <ReactMarkdown
      source={markdownText}
      renderers={{
        Link: LinkRenderer,
      }}
      escapeHtml={false}
      />
    </div>
  )
}

export default Article;
