import React from "react";
import FeaturedSpeaker from "./FeaturedSpeaker"

const FeaturedSpeakerListing = ({ title, speakers }) => (
  <>
    <h2>{title}</h2>
    <div className="featured-speaker-multi-listing">
      {speakers.map(sp => <FeaturedSpeaker {...sp} />)}
    </div>
  </>
)

export default FeaturedSpeakerListing