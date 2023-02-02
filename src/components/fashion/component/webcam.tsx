import React from "react";

async function setupVideo(): Promise<HTMLVideoElement> {
  const video = document.getElementById("video") as HTMLVideoElement;
  const stream = await window.navigator.mediaDevices.getUserMedia({
    video: true,
  });

  video.srcObject = stream;
  await new Promise((resolve) => {
    video.onloadedmetadata = resolve;
  });
  video.play();

  video.width = video.videoWidth;
  video.height = video.videoHeight;

  return video;
}

const Webcamera: React.FC = () => {
  return <video width="300" height="200" autoPlay muted id="video" />;
};

export { Webcamera, setupVideo };
