import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#a1f5f1" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      Made with <i className="fas fa-poop"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/xiaoAllen1"
        aria-label="My GitHub"
      >
         Lucas Gong
      </a>{" "}
      using <i className="fab fa-poop"></i>
      <p>
        <small className="text-muted">
          {" "}
          This is an open-source project. You can fork it and make your own
          version.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
