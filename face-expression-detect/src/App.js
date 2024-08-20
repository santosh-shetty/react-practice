import { useEffect, useRef, useState } from "react";
import man from "./man.jpg";
import "./App.css";
import * as faceapi from "face-api.js";

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();
  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    // console.log(detections);
    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width: 500,
      height: 600,
    });
    const resizedDetections = faceapi.resizeResults(detections, {
      width: 500,
      height: 600,
    });
    faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
    faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e));
    };
    imgRef.current && loadModels();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={imgRef}
          crossOrigin="anonymous"
          // src={man}
          src="https://images.pexels.com/photos/5325554/pexels-photo-5325554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          // src="https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="App-logo"
          alt="logo"
        />
        <canvas ref={canvasRef} id="myCanvas" width="200" height="100"></canvas>
      </header>
    </div>
  );
}

export default App;
