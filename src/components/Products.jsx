import { useRef, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Products = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [productsItems, setproductsItems] = useState([]);
  const { handleInputProducts } = useInvoiceContext();
  const formRef = useRef(null);

  const handleInputChange = (index, field, value) => {
    const newproductsItems = [...productsItems];
    if (!newproductsItems[index]) {
      newproductsItems[index] = {};
    }
    newproductsItems[index][field] = value;

    const calculatedTotal = calculateTotal(
      newproductsItems[index]?.PricioPorUnidad || 0,
      newproductsItems[index]?.Cantidad || 1,
      newproductsItems[index]?.Descuento || 0
    );
    newproductsItems[index]["Total"] = calculatedTotal;

    setproductsItems(newproductsItems);
  };

  const calculateTotal = (price, quantity, discount) => {
    const totalPrice = price * quantity;
    if (selectedOption === "Porcentaje") {
      const discountAmount = (totalPrice * discount) / 100;
      return totalPrice - discountAmount;
    } else {
      return totalPrice - discount;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleInputProducts(productsItems);
    const calculatedTotal = calculateTotal(
      productsItems[0]?.PricioPorUnidad || 0,
      productsItems[0]?.Cantidad || 1,
      productsItems[0]?.Descuento || 0
    );

    handleInputChange(0, "Total", Number(calculatedTotal));

    formRef.current.reset();
    setproductsItems([]);
    setSelectedOption("");
  };

  return (
    <div className="flex p-4  fixed top-2 left-40 max-w-md">
      <form
        ref={formRef}
        className="w-96 h-max  p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
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
          <label htmlFor="Precio por unidad" className="block font-bold mb-1">
            Precio por unidad:
          </label>
          <input
            required
            min={0}
            type="number"
            name="Precio por unidad"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => {
              const inputValue = e.target.value.slice(0, 12);
              e.target.value = inputValue;
              handleInputChange(0, "PricioPorUnidad", Number(inputValue));
            }}
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
            onChange={(e) => {
              const inputValue = e.target.value.slice(0, 5);
              e.target.value = inputValue;
              handleInputChange(0, "Cantidad", Number(inputValue));
            }}
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
                  ? " bg-emerald-600 text-sm text-white w-auto rounded-xl h-9 font-thin cursor-pointer"
                  : "w-auto text-sm bg-slate-400 hover:bg-emerald-600 text-white rounded-xl h-9 font-thin cursor-pointer"
              }`}
            >
              Descuento
            </div>
            <div
              required
              onClick={() => {
                handleInputChange(0, "TipoDeDescuento", "TarifaPlana");
                setSelectedOption("Tarifa plana");
              }}
              className={`w-1/2 p-2 ${
                selectedOption === "Tarifa plana"
                  ? "bg-emerald-600 text-sm text-white w-auto rounded-xl h-9 font-thin cursor-pointer"
                  : " w-auto bg-slate-400 text-sm hover:bg-emerald-600 text-white rounded-xl h-9 font-thin cursor-pointer"
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
              onChange={(e) => {
                const inputValue = e.target.value.slice(0, 3);
                e.target.value = inputValue;
                handleInputChange(0, "Descuento", Number(inputValue));
              }}
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-emerald-800 hover:bg-emerald-600 text-white px-4 py-2 rounded w-full h-10 mt-5"
        >
          Agregar más productos
        </button>
        <div className="flex items-center justify-between mt-5 ">
          <label htmlFor="total">Total:</label>
          <h2 name="total" className="block font-bold text-2xl">
            $
            {productsItems[0]
              ? calculateTotal(
                  productsItems[0].PricioPorUnidad || 0,
                  productsItems[0].Cantidad || 1,
                  productsItems[0].Descuento || 0
                ).toLocaleString("en-CO")
              : "0"}
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Products;
