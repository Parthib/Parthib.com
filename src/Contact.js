import React, { useState } from "react"
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import markdown from './data/contact.md';
import links from './data/socialmedia';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function Contact(props) {

  const [markdownText, setMarkdown] = useState("");

  fetch(markdown)
    .then(response => response.text())
    .then(
      text => {
        setMarkdown(text);
      }
    );

  return (
    <div>
      <div className="content">
        <ReactMarkdown
        source={markdownText}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
        />

        <ul className="media">
          {links.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact;
