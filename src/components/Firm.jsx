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
    <div className="flex flex-col justify-center bg-white rounded-lg shadow-md p-4 z-50 fixed top-2 left-40 m-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="block font-bold mb-1">Firma Digital</h2>

        <SignatureCanvas
          ref={signatureCanvasRef}
          penColor="black"
          canvasProps={{
            width: 450,
            height: 200,
            className: "signature-canvas bg-black bg-slate-200",
          }}
        />
      </div>
      <div className="flex justify-between mt-4">
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
  );
};

export default Firm;
