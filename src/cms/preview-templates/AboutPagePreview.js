import React from "react";
import PropTypes from "prop-types";
import StandardPageTemplate from "../../components/StandardPageTemplate";
import OrganizerSection from "../../components/OrganizerSection";
import ReactMarkdown from "react-markdown";

const AboutPagePreview = ({ entry, widgetFor }) => {
  const page = {
    frontmatter: entry.getIn(["data"]).toJS(),
    html: entry.getIn(["data", "body"])
  };
  const { organizers } = page.frontmatter;

  return (
    <StandardPageTemplate page={{ ...page }} endContent={<OrganizerSection organizers={organizers} />}>
      <ReactMarkdown className="about-description" content={page.html} />
    </StandardPageTemplate>
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
