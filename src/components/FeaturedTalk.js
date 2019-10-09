import React from "react";

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
  <div className="featured-speaker-bio">{bio}</div>
)

const FeaturedTalk = ({ speakers, title, abstract }) => (
  <div className="featured-speaker-outer">
    {speakers.map(sp => <FeaturedSpeakerDetails {...sp} />)}
    <div className="featured-speaker-talk">
      <div className="featured-speaker-title">{title}</div>
      <div className="featured-speaker-abstract">{abstract}</div>
    </div>
    {speakers.map(sp => <FeaturedSpeakerBio {...sp} />)}
  </div>
)

export default FeaturedTalk