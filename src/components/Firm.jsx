import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Firm = () => {
  const signatureCanvasRef = useRef(null);
  const [firmImageURL, setFirmImageURL] = useState(null);
  const { setInvoiceFirm } = useInvoiceContext();

  const clearFirm = () => {
    signatureCanvasRef.current.clear();
    setFirmImageURL(null);
  };

  const saveFirm = () => {
    const firmDataURL = signatureCanvasRef.current.toDataURL();
    setFirmImageURL(firmDataURL);
    setInvoiceFirm(firmDataURL);
  };

  return (
    <div className="flex justify-center w-[100%] p-4 z-10 fixed top-8 // sm:top-4 sm:justify-start sm:w-auto sm:left-40 ">
      <div className="flex flex-col justify-center bg-white rounded-lg shadow-md p-4 w-80 // sm:w-96">
        <div className="flex flex-col justify-center items-center">
          <h2 className="block font-bold mb-1">Firma Digital</h2>

          <SignatureCanvas
            ref={signatureCanvasRef}
            penColor="black"
            canvasProps={{
              width: 450,
              height: 200,
              className:
                "w-72 signature-canvas bg-black bg-slate-200 // sm:w-[22rem]",
            }}
          />
        </div>
        <div className="flex justify-between mt-4 gap-4">
          <button
            className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded w-40 cursor-pointer"
            onClick={clearFirm}
          >
            Eliminar
          </button>
          <button
            className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded w-40 cursor-pointer"
            onClick={saveFirm}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firm;
