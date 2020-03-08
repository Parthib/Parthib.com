import React, { useState } from "react"
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function FacebookData(props) {

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

export default FacebookData;
