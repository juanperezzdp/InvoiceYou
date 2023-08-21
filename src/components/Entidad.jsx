import React, { useRef, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Entidad = () => {
  const [entity, setEntity] = useState([]);
  const { handleInputEntity } = useInvoiceContext();
  const formRef = useRef(null);

  const handleChange = (index, field, value) => {
    const newentity = [...entity];
    if (!newentity[index]) {
      newentity[index] = {};
    }
    newentity[index][field] = value;
    setEntity(newentity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputEntity(entity);

    formRef.current.reset();
    setEntity([]);
  };

  return (
    <div className="flex justify-center w-[100%] p-4 z-10 fixed top-8 // sm:top-4 sm:justify-start sm:w-auto sm:left-40">
      <form
        ref={formRef}
        className="w-96 h-max p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <label htmlFor="entidad" className="block font-bold mb-1">
            Entidad Bancaria:
          </label>
          <input
            required
            maxLength={25}
            type="text"
            id="entidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleChange(0, "EntidadBancaria", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="entidad" className="block font-bold mb-1">
            Codigo de referencia:
          </label>
          <input
            required
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={20}
            id="entidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => {
              const inputValue = Number(e.target.value.slice(0, 15));
              e.target.value = inputValue;
              handleChange(0, "CodigoDeReferencia", inputValue);
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

export default Entidad;
