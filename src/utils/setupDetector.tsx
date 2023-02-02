import * as tfjsWasm from "@tensorflow/tfjs-backend-wasm";
import "@tensorflow-models/face-detection";
import "@tensorflow/tfjs-backend-webgl";

tfjsWasm.setWasmPaths(
  `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm`
);

async function FacemeshDetector(): Promise<any> {
  const faceLandmarksDetection = await import(
    "@tensorflow-models/face-landmarks-detection"
  );
  const faceMesh = await import("@mediapipe/face_mesh");
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detector = await faceLandmarksDetection.createDetector(model, {
    runtime: "mediapipe",
    solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@${faceMesh.VERSION}`,
    maxFaces: 1,
    refineLandmarks: true,
  });
  return detector;
}

async function handDetector(): Promise<any> {
  const handPoseDetection = await import(
    "@tensorflow-models/hand-pose-detection"
  );
  const hands = await import("@mediapipe/hands");
  const model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detector = await handPoseDetection.createDetector(model, {
    runtime: "mediapipe", // or 'tfjs',
    solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${hands.VERSION}`,
    modelType: "full",
  });
  return detector;
}

export { FacemeshDetector, handDetector };
