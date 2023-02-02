import React, { useEffect } from "react";

async function setupVideo(video: HTMLMediaElement): Promise<void> {
  const stream = await window.navigator.mediaDevices.getUserMedia({
    video: true,
  });

  video.srcObject = stream;
  await new Promise((resolve: any) => {
    video.onloadedmetadata = () => {
      resolve();
    };
  });
  video.play();

  if (video instanceof HTMLVideoElement) {
    const videoElement = video as HTMLVideoElement;
    videoElement.width = videoElement.videoWidth;
    videoElement.height = videoElement.videoHeight;
  }
}

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const Webcam = ({ videoRef }: Props) => {
  useEffect(() => {
    async function initialize() {
      if (videoRef?.current) {
        await setupVideo(videoRef.current);
      }
    }

    initialize();
  }, []);

  return (
    <div className="absolute">
      <video width="300" height="200" autoPlay muted ref={videoRef} />
    </div>
  );
};

export default Webcam;
