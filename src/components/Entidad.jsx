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
    <div className="flex p-4 z-50 fixed top-2 left-40 max-w-md">
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
            id="entidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) =>
              handleChange(0, "CodigoDeReferencia", e.target.value)
            }
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
