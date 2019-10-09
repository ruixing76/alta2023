import React from "react";
import FeaturedTalk from "./FeaturedTalk"

const FeaturedSpeakerListing = ({ title, talks }) => (
  <>
    <h2>{title}</h2>
    <div className="featured-speaker-multi-listing">
      {talks.map(t => <FeaturedTalk {...t} />)}
    </div>
  </>
)

export default FeaturedSpeakerListing