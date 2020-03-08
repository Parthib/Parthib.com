import React, { useState } from "react"
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import markdown from './data/resume.md';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function Resume(props) {

  const [markdownText, setMarkdown] = useState("");

  fetch(markdown)
    .then(response => response.text())
    .then(
      text => {
        setMarkdown(text);
      }
    );

  library.add(faFilePdf);

  return (
    <div>
      <div className="content" id="resume">
        <h2>Resume
          <a href="Resume_parthib_samadder.pdf">
            <FontAwesomeIcon icon= {faFilePdf}/>
          </a>
        </h2>
        <ReactMarkdown
        source={markdownText}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
        />
      </div>
    </div>
  )
}

export default Resume;
