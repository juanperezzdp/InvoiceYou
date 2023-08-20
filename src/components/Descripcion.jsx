import React, { useRef, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Descripcion = () => {
  const [Descripcion, setDescripcion] = useState([]);
  const { handleInputDescripcion } = useInvoiceContext();
  const formRef = useRef(null);

  const handleChange = (index, field, value) => {
    const newDescripcion = [...Descripcion];
    if (!newDescripcion[index]) {
      newDescripcion[index] = {};
    }
    newDescripcion[index][field] = value;
    setDescripcion(newDescripcion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputDescripcion(Descripcion);
    console.log(Descripcion);

    formRef.current.reset();
    setDescripcion([]);
  };

  return (
    <div className="flex p-4  fixed top-2 left-40 max-w-md">
      <form
        ref={formRef}
        className="w-96 h-max p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="description" className="block font-bold mb-1">
            Informacion adicional:
          </label>
          <textarea
            required
            maxLength={200}
            name="description"
            cols="45"
            rows="5"
            className="border rounded-sm resize-none"
            onChange={(e) => handleChange(0, "Descripcion", e.target.value)}
          ></textarea>
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

export default Descripcion;
