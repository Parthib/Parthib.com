import React, { useState } from "react"
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import DynamicName from "./props/DynamicName.js"

import markdown from './data/mainMessage.md';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function Home(props) {

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
      <DynamicName/>
      <ReactMarkdown
        source={markdownText}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
        className='content'
      />
    </div>
  )
}

export default Home;
