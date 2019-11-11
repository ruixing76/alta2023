import React from "react";
import ReactMarkdown from "react-markdown";

const FeaturedSpeakerDetails = ({ name, affiliation, photo }) => (
  <>
    {photo ? <div className="featured-speaker-photo"><img src={`/people/${photo}`} alt={name} /></div> : null}
    <div className="featured-speaker-presenter">
      <div className="featured-speaker-name">{name}</div>
      <div className="featured-speaker-affiliation">{affiliation}</div>
    </div>
  </>
)

const FeaturedSpeakerBio = ({ bio }) => (
  <ReactMarkdown className="featured-speaker-bio">{bio}</ReactMarkdown>
)

const FeaturedTalk = ({ speakers, title, abstract }) => (
  <div className="featured-speaker-outer">
    {speakers.map(sp => <FeaturedSpeakerDetails {...sp} />)}
    <div className="featured-speaker-talk">
      <div className="featured-speaker-title">{title}</div>
      <ReactMarkdown className="featured-speaker-abstract">{abstract}</ReactMarkdown>
    </div>
    {speakers.map(sp => <FeaturedSpeakerBio {...sp} />)}
  </div>
)

export default FeaturedTalk