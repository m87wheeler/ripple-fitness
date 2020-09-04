import React from "react"
import PropTypes from "prop-types"

const VideoPlayer = props => {
  return (
    <iframe
      width={`${props.width}`}
      height={props.width * 0.5625}
      src={props.src}
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen={props.fullscreen}
    ></iframe>
  )
}

VideoPlayer.defaultProps = {
  fullscreen: false,
}

VideoPlayer.propTypes = {
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  fullscreen: PropTypes.bool,
}

export default VideoPlayer
