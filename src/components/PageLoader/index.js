import React from "react";

function PageLoader({ title, children }) {
  return (
    <main className="page">
      {title}
      {children}
    </main>
  );
}

export default PageLoader;
