import { useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Products = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [productsItems, setproductsItems] = useState([]);
  const { handleInputProducts } = useInvoiceContext();

  const handleInputChange = (index, field, value) => {
    const newproductsItems = [...productsItems];
    if (!newproductsItems[index]) {
      newproductsItems[index] = {};
    }
    newproductsItems[index][field] = value;
    setproductsItems(newproductsItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with productsItems array, e.g. send it to an API or process it
    console.log(productsItems);
    handleInputProducts(productsItems);
  };

  return (
    <div className="flex p-4 z-50 fixed top-2 left-40 max-w-md">
      <form
        className="w-96 h-max  p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        x
        <div className="flex items-center justify-between">
          <label htmlFor="Productos" className="block font-bold mb-1">
            Productos:
          </label>
          <input
            required
            maxLength={25}
            type="text"
            name="Productos"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Productos", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Pricio por unidad" className="block font-bold mb-1">
            Pricio por unidad:
          </label>
          <input
            required
            min={0}
            type="number"
            name="Pricio por unidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) =>
              handleInputChange(0, "PricioPorUnidad", e.target.value)
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Cantidad" className="block font-bold mb-1">
            Cantidad:
          </label>
          <input
            required
            min={0}
            type="number"
            name="Cantidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Cantidad", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Tipo de Descuento" className="block font-bold mb-1">
            Tipo de Descuento:
          </label>
          <div className="flex items-center justify-around w-30 p-1 gap-1">
            <div
              onClick={() => {
                handleInputChange(0, "TipoDeDescuento", "Porcentaje");
                setSelectedOption("Porcentaje");
              }}
              className={`w-1/2 p-2 ${
                selectedOption === "Porcentaje"
                  ? "bg-blue-500 text-white w-auto rounded-xl h-10 font-thin cursor-pointer"
                  : "w-auto bg-slate-400  hover:bg-blue-500 text-white rounded-xl h-10 font-thin cursor-pointer"
              }`}
            >
              Porcentaje
            </div>
            <div
              onClick={() => {
                handleInputChange(0, "TipoDeDescuento", "Tarifa plana");
                setSelectedOption("Tarifa plana");
              }}
              className={`w-1/2 p-2 ${
                selectedOption === "Tarifa plana"
                  ? "bg-blue-500 text-white w-auto rounded-xl h-10 font-thin cursor-pointer"
                  : " w-auto bg-slate-400  hover:bg-blue-500 text-white rounded-xl h-10 font-thin cursor-pointer"
              }`}
            >
              Tarifa plana
            </div>
          </div>
        </div>
        {selectedOption === "Porcentaje" && (
          <div className="flex items-center justify-between">
            <label htmlFor="Descuento" className="block font-bold mb-1">
              Descuento:
            </label>
            <input
              required
              min={0}
              type="number"
              name="Descuento"
              className="w-50 p-1 mb-2 border rounded-sm"
              onChange={(e) =>
                handleInputChange(0, "Descuento", e.target.value)
              }
            />
          </div>
        )}
        <div>
          <label htmlFor="description" className="block font-bold mb-1">
            Informacion adicional:
          </label>
          <textarea
            required
            maxLength={100}
            name="description"
            cols="45"
            rows="5"
            className="border rounded-sm resize-none"
            onChange={(e) =>
              handleInputChange(0, "Descripcion", e.target.value)
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded w-full h-10 mt-5"
        >
          Agregar más productos
        </button>
        <div className="flex items-center justify-between mt-5 ">
          <label htmlFor="total">Total:</label>
          <h3 name="total" className="block font-bold">
            ghgdfdfdfh
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Products;
