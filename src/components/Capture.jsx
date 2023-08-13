import React, { useState, useRef } from "react";

const Capture = () => {
  const videoRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("loading");

  const startCamera = async () => {
    setImageSrc(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL("image/jpeg");
    setImageSrc(dataURL);
    alert("Se a tomado la foto correctamente");
    console.log(dataURL);
  };

  return (
    <div className="flex flex-col m-4 rounded-lg shadow-md bg-white p-4 z-50 fixed top-2 left-40 w-96">
      <div className="flex flex-col items-center justify-center h-64">
        {imageSrc && <img src={imageSrc} alt="" />}
        {imageSrc === null && <video ref={videoRef} autoPlay playsInline />}
        {imageSrc === "loading" && <h1>Haga click en iniciar cámara</h1>}
      </div>
      <div className="flex justify-between mt-6 gap-4">
        <button
          className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded w-40 "
          onClick={startCamera}
        >
          Iniciar cámara
        </button>
        <button
          className="bg-sky-800 hover:bg-sky-700 text-white px-4 py-2 rounded w-40 "
          onClick={capturePhoto}
        >
          Tomar foto
        </button>
      </div>
    </div>
  );
};

export default Capture;
