import React, { useState, useRef } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";
import { MdOutlineClear } from "react-icons/md";
import { useFloatingWindow } from "../Context/ContextComponents";

const Capture = () => {
  const videoRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("loading");
  const [photosTaken, setPhotosTaken] = useState(0); // Nuevo estado para contar las fotos tomadas
  const { handleInputImg } = useInvoiceContext();
  const { setActiveComponent } = useFloatingWindow();

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
    if (photosTaken < 4) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL("image/jpeg");
      setImageSrc(dataURL);
      setPhotosTaken(photosTaken + 1); // Incrementar el contador de fotos tomadas
      alert("Se ha tomado la foto correctamente");
      handleInputImg(dataURL);
    } else {
      alert("Ya se han tomado 4 fotos.");
    }
  };

  return (
    <div className="flex justify-center w-[100%] p-4 z-10 fixed top-8 // sm:top-4 sm:justify-start sm:w-auto sm:left-40 ">
      <div className="flex flex-col border-[1px] border-gray-400 rounded-lg shadow-md bg-white p-4 w-80 // sm:w-96">
        <div className="max-w-full flex justify-end // sm:hidden">
          <MdOutlineClear
            onClick={() => setActiveComponent("x")}
            className="text-xl text-red-700 mt-[-0.5rem] mb-2 flex justify-end "
          />
        </div>
        <div className="flex bg-slate-400 flex-col items-center justify-center h-52 // sm:h-64">
          {imageSrc && <img src={imageSrc} alt="" />}
          {imageSrc === null && <video ref={videoRef} autoPlay playsInline />}
          {imageSrc === "loading" && (
            <h1 className="text-white">Haga click en iniciar cámara</h1>
          )}
        </div>
        <div className=" mt-4">
          <h4>Solo se puede tomar 4 fotos</h4>
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
    </div>
  );
};

export default Capture;
