import React, { useRef, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Iva = () => {
  const [iva, setIva] = useState([]);
  const { handleInputIva } = useInvoiceContext();
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
    <div className="flex p-4 z-50 fixed top-2 left-40 max-w-md">
      <form
        ref={formRef}
        className="w-96 h-max p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <label htmlFor="entidad" className="block font-bold mb-1">
            IVA:
          </label>
          <input
            required
            type="number"
            maxLength={15}
            id="entidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => {
              const inputValue = e.target.value.slice(0, 3);
              e.target.value = inputValue;
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
