import React, { useEffect, useRef } from "react";
import "@tensorflow/tfjs-backend-webgl";
import Webcam from "./webcam";
import { drawMesh } from "../../../utils/triangulation";
import SetupDetector from "@/src/utils/setupDetector";

interface Props {}

const Gallery: React.FC<Props> = () => {
  const detectorRef = useRef<ReturnType<typeof SetupDetector> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function initialize() {
      try {
        detectorRef.current = await SetupDetector();
      } catch (e: any) {
        console.error("gallery.js => function initialize :", e.message);
      }
    }
    initialize();
  }, []);

  const runFacemesh = async () => {
    setInterval(async () => {
      try {
        const faces = await (
          await detectorRef.current
        )?.estimateFaces(videoRef.current);

        // console.log("videoRef :", faces);
        var c = canvasRef?.current as HTMLCanvasElement;
        var ctx = c.getContext("2d");
        if (ctx && videoRef?.current && canvasRef?.current) {
          // Get Video Properties
          const video = videoRef.current;
          const videoWidth = video.videoWidth;
          const videoHeight = video.videoHeight;
          // Set video width
          video.width = videoWidth;
          video.height = videoHeight;

          // Set canvas width
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;

          console.log("faces :", faces);
          drawMesh(faces, ctx);
        }
      } catch (e: any) {
        console.log("gallery.js => function runFacemesh :", e.message);
      }
    }, 10);
  };

  useEffect(() => {
    runFacemesh();
  }, []);

  return (
    <div className="rounded-3xl relative overflow-hidden h-full bg-black flex justify-center items-center">
      <Webcam videoRef={videoRef} />
      <canvas
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#000",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          height: 480,
        }}
        ref={canvasRef}
      />
    </div>
  );
};

export default Gallery;
