import React from "react";
import "./styles.scss";

export const FooterTemplate = ({ frontmatter, site }) => {
  const { logoImage, socialLinks } = frontmatter;
  const { sponsors } = site.siteMetadata;
  const footerSponsorLevels = ["Platinum", "Gold", "Silver","Bronze","Event"];

  return (
    <nav className="footer">
      <div className="footer-container  container">
        <div className="footer-top">
          <div className="footer-about">
            <h4 className="footer-aboutTitle">
              <a href={logoImage.orgLink}>
                <img
                  className="footer-aboutTitleImg"
                  src={logoImage.image}
                  alt={logoImage.imageAlt}
                />
              </a>
            </h4>
            <div className="footer-aboutDescription">
              {logoImage.taglines.map((tl, idx) => <p key={idx}>{tl}</p>)}
            </div>
          </div>
          <div className="footer-sponsors">
            {footerSponsorLevels.map(level => {
              const matching = sponsors.filter(s => s.level === level);
              if (matching.length > 0)
                return (<div className="footer-sponsor-block" key={level}>
                  <h4 className="footer-sponsor-level">{level} Sponsors</h4>
                  <ul className="footer-sponsors-at-level">
                    {matching.map(s => <li className="footer-single-sponsor" key={s.name}><a href={s.link} title={s.longName}>{s.name}</a></li>)}
                  </ul>
                </div>);
              else
                return null;
            })}
          </div>
          {socialLinks.length > 0 && (
            <ul className="footer-socialMenu">
              {socialLinks.map(socialLink => (
                <li key={socialLink.linkURL} className="footer-socialMenuItem">
                  <a
                    className="footer-socialLink"
                    href={socialLink.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer-socialLinkIcon"
                      src={socialLink.image}
                      alt={socialLink.imageAlt}
                    />
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = ({data, site}) => {
  if (!data) 
    return null;
  const frontmatter = data.edges[0].node.frontmatter;
  return <FooterTemplate frontmatter={frontmatter} site={site} />;
};

export { Footer };
