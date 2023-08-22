import { useRef, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";
import { useFloatingWindow } from "../Context/ContextComponents";
import { MdOutlineClear } from "react-icons/md";

const Iva = () => {
  const [iva, setIva] = useState([]);
  const { handleInputIva } = useInvoiceContext();
  const { setActiveComponent } = useFloatingWindow();
  const formRef = useRef(null);

  const handleChange = (index, field, value) => {
    const newIva = [...iva];
    if (!newIva[index]) {
      newIva[index] = {};
    }
    newIva[index][field] = Number(value);
    setIva(newIva);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputIva(iva);

    formRef.current.reset();
    setIva([]);
  };

  return (
    <div className="flex justify-center w-full p-4 z-10 fixed top-8 sm:top-4 sm:justify-start sm:left-40">
      <form
        ref={formRef}
        className="w-96 max-h-full p-4 border border-gray-400 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="max-w-full flex justify-end // sm:hidden">
          <MdOutlineClear
            onClick={() => setActiveComponent("x")}
            className="text-xl text-red-700 mt-[-0.5rem] mb-2 flex justify-end "
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="entidad" className="block font-bold mb-1">
            IVA:
          </label>
          <input
            required
            type="number"
            maxLength={15}
            id="entidad"
            className="w-20 p-1 mb-2 border rounded-sm"
            onChange={(e) => {
              const inputValue = e.target.value.slice(0, 3);
              handleChange(0, "ImpuestoValorAgregado", inputValue);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-800 hover:bg-emerald-600 text-white px-4 py-2 rounded w-full h-10 mt-5"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Iva;
