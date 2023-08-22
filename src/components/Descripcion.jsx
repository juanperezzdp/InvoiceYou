import { useRef, useState } from "react";
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
    <div className="flex justify-center w-[100%] p-4 z-10 fixed top-8  // sm:top-4 sm:justify-start sm:w-auto sm:left-40 ">
      <form
        ref={formRef}
        className="w-80 h-max p-4 border-[1px] border-gray-400 bg-white rounded-lg shadow-md // sm:w-96"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="description" className="block font-bold mb-1">
            Informacion adicional:
          </label>
          <textarea
            required
            maxLength={300}
            name="description"
            cols="45"
            rows="5"
            className="max-w-full border rounded-sm resize-none"
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
