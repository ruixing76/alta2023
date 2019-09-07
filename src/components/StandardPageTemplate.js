import React from "react";

const StandardPageTemplate = props => {
  const { page, endContent } = props;
  const { title } = page.frontmatter;

  return (
    <article className="about">
      <div className="about-container  container">
        <section className="about-header">
          <div className="about-titleWrapper">
            <h1 className="about-title">{title}</h1>
          </div>
        </section>
        <section className="section">
          {props.children}
        </section>
      </div>
      {endContent}
    </article>
  );
};

export default StandardPageTemplate