import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const MusicPage = () => {
  const audioRef = useRef(null);
  const [showTip, setShowTip] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const { t } = useTranslation();
  const hideTip = () => {
    setIsFading(true);
    setTimeout(() => setShowTip(false), 350);
  };

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0.43;
      audioRef.current.play();
    }
    hideTip();
  };

  useEffect(() => {
    const timeout = setTimeout(hideTip, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <MusicPagePart onClick={handleClick}>
      <img loading="lazy" src={Music} alt="music" />
      <audio ref={audioRef} src={Song} loop />
      {showTip && (
        <div
          onClick={handleClick}
          className={`tip ${isFading ? "fade-out" : ""}`}
        >
          {t("click_here")}{" "}
        </div>
      )}
    </MusicPagePart>
  );
};
