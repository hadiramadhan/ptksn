import React from 'react'


const VideoPlayer = () => {
  return (
    <div>
    <video width="30%" height="30%" controls>
      <source src="/video/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default VideoPlayer
