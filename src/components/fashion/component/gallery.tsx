import React, { useEffect, useRef } from "react";
import { drawMesh } from "../../../utils/triangulation";
import SetupDetector from "@/src/utils/setupDetector";
import { setupVideo, Webcamera } from "./webcam";

interface Props {}

const Gallery: React.FC<Props> = () => {
  const detectorRef = useRef<ReturnType<typeof SetupDetector> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    (async () => {
      try {
        videoRef.current = await setupVideo();
        detectorRef.current = await SetupDetector();
      } catch (e: any) {
        console.error("gallery.js => function initialize :", e.message);
      }
    })();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const faces = await (detectorRef.current as any)?.estimateFaces(
          videoRef.current
        );
        const c = canvasRef.current as HTMLCanvasElement;
        const ctx = c.getContext("2d");

        if (ctx && videoRef.current && canvasRef.current && faces) {
          const video = videoRef.current;
          video.width = video.videoWidth;
          video.height = video.videoHeight;

          canvasRef.current.width = video.videoWidth;
          canvasRef.current.height = video.videoHeight;
          ctx.drawImage(
            video,
            0,
            0,
            video.videoWidth,
            video.videoHeight,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          drawMesh(faces, ctx);
        }
      } catch (e: any) {
        console.log("gallery.js => function runFacemesh :", e.message);
      }
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="rounded-3xl relative overflow-hidden h-full bg-black flex justify-center items-center">
      <Webcamera />
      <canvas
        className="absolute ml-auto mr-auto left-0 right-0"
        ref={canvasRef}
      />
    </div>
  );
};

export default Gallery;
