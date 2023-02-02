import React from "react";

async function SetupDetector(): Promise<any> {
  const faceLandmarksDetection = await import(
    "@tensorflow-models/face-landmarks-detection"
  );
  const faceMesh = await import("@mediapipe/face_mesh");
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detector = await faceLandmarksDetection.createDetector(model, {
    runtime: "mediapipe",
    solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@${faceMesh.VERSION}`,
    maxFaces: 2,
    refineLandmarks: true,
  });
  return detector;
}

export default SetupDetector;
