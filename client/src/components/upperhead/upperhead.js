import React from "react";
import videoHeader from "../../Assets/header-loop.mp4"

function UpperHead() {
  return (
    <>
      <div className="video-container" style={{height:"300px" , width:"100%"}}>
        <video height="500" width="600"  controls={false}>
          <source src="../../header-video.mp4" type="video/mp4" />
          Your browser doesn't support video tag
        </video>
      </div>
    </>
  );
}

export default UpperHead;

