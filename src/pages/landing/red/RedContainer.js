import React from "react";
import Red from "./Red";
import musicSource from "../../../music/indiansong.mp3";
function RedContainer() {
  const musicRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayMusic = () => {
    const music = musicRef.current;
    if (!isPlaying) {
      setIsPlaying(true);
      music.play();
    } else {
      setIsPlaying(false);
      music.pause();
    }
  };

  return (
    <>
      <audio ref={musicRef} src={musicSource}></audio>
      <Red handlePlayMusic={handlePlayMusic} />
    </>
  );
}

export default RedContainer;
