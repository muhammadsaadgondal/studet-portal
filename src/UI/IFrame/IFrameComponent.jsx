import React from 'react';
import classes from "./IFrameContainer.module.css";
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

const IFrameComponent = (props) => {
  var id = getYouTubeID(props.url);
  const opts = {
    height: '120',
    width: '170',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return <YouTube videoId={id} opts={opts}  />;
};

export default IFrameComponent;
