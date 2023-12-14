import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

const CodeBlock = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="code-block">
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="copy-button">{isCopied ? 'Copied!' : 'Copy'}</button>
      </CopyToClipboard>
      <pre className="language-javascript">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;