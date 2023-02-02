import React, { useEffect, useRef } from "react";
import { drawHand, drawMesh } from "../../../utils/triangulation";
import { FacemeshDetector, handDetector } from "@/src/utils/setupDetector";
import { setupVideo, Webcamera } from "./webcam";
// import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

interface Props {}

const Gallery: React.FC<Props> = () => {
  const facemeshdetectorRef = useRef<ReturnType<
    typeof FacemeshDetector
  > | null>(null);
  const handdetectorRef = useRef<ReturnType<typeof handDetector> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const contours = faceLandmarksDetection.util.getKeypointIndexByContour(
  //   faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh
  // );

  // console.log("contours :", contours);

  useEffect(() => {
    (async () => {
      try {
        videoRef.current = await setupVideo();
        facemeshdetectorRef.current = await FacemeshDetector();
        handdetectorRef.current = await handDetector();
      } catch (e: any) {
        console.error("gallery.js => function initialize :", e.message);
      }
    })();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const faces = await (facemeshdetectorRef.current as any)?.estimateFaces(
          videoRef.current
        );

        const hands = await (handdetectorRef.current as any)?.estimateHands(
          videoRef.current
        );

        // console.log("hands :", hands);

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
          // drawHand(hands, ctx);
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
