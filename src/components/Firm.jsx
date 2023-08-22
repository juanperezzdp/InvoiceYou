import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useInvoiceContext } from "../Context/InvoiceContext";
import { MdOutlineClear } from "react-icons/md";
import { useFloatingWindow } from "../Context/ContextComponents";

const Firm = () => {
  const signatureCanvasRef = useRef(null);
  const [firmImageURL, setFirmImageURL] = useState(null);
  const { setInvoiceFirm } = useInvoiceContext();
  const { setActiveComponent } = useFloatingWindow();

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
      <div className="flex flex-col justify-center border-[1px] border-gray-400 bg-white rounded-lg shadow-md p-4 w-80 // sm:w-96">
        <div className="max-w-full flex justify-end // sm:hidden">
          <MdOutlineClear
            onClick={() => setActiveComponent("x")}
            className="text-xl text-red-700 mt-[-0.5rem] mb-2 flex justify-end "
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="block font-bold mb-1">Firma Digital</h2>

          <SignatureCanvas
            ref={signatureCanvasRef}
            penColor="black"
            canvasProps={{
              width: 400,
              height: 200,
              className:
                "max-w-full signature-canvas bg-black bg-slate-200 // sm:w-auto",
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
