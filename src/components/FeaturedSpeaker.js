import React from "react";

const FeaturedSpeaker = ({ name, affiliation, bio, photo, title, abstract }) => (
  <div className="featured-speaker-outer">
    <div className="featured-speaker-photo"><img src={`/people/${photo}`} alt={name} /></div>
    <div className="featured-speaker-presenter">
      <div className="featured-speaker-name">{name}</div>
      <div className="featured-speaker-affiliation">{affiliation}</div>
    </div>
    <div className="featured-speaker-talk">
      <div className="featured-speaker-title">{title}</div>
      <div className="featured-speaker-abstract">{abstract}</div>
    </div>
    <div className="featured-speaker-bio">{bio}</div>
  </div>
)

export default FeaturedSpeaker