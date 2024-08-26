import React, { useRef, useEffect } from "react";
import videoBg from "./Assets/header-loop.mp4";
import "./App.css";

function Testing() {
  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement.currentTime > 1.7) {
        videoElement.style.transition = "opacity 0.2s ease-out";
        videoElement.style.opacity = 0.9;
      } else {
        videoElement.style.transition = "opacity 0.2s ease-in";
        videoElement.style.opacity = 1;
      }
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <>
      <div
        className="video-container"
        style={{ height: "500px", width: "100%" }}
      >
        <video
          ref={videoRef}
          height="500"
          width="100%"
          muted
          controls={false}
          autoPlay
          playsInline
          className="background-video"
          loop
        >
          <source src={videoBg} type="video/mp4" />
          Your browser doesn't support video tag
        </video>
      </div>
      <dir className="overlay-content">
        <h1 className="overlay-text">Welcome vro</h1>
      </dir>
    </>
  );
}

export default Testing;
