import { useEffect, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Client = () => {
  const [invoiceItemss, setInvoiceItemsss] = useState([]);
  const { handleInputChangee } = useInvoiceContext();

  const handleInputChange = (index, field, value) => {
    const newInvoiceItemss = [...invoiceItemss];
    if (!newInvoiceItemss[index]) {
      newInvoiceItemss[index] = {};
    }
    newInvoiceItemss[index][field] = value;
    setInvoiceItemsss(newInvoiceItemss);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(invoiceItemss);
    handleInputChangee(invoiceItemss);
  };

  return (
    <div className="flex p-4 z-50 fixed top-2 left-40 max-w-sm">
      <form
        className="w-96 h-max  p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        x
        <div className="flex items-center justify-between">
          <label htmlFor="Cliente" className="block font-bold mb-1">
            Cliente:
          </label>
          <input
            type="text"
            name="Cliente"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Cliente", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Direcion" className="block font-bold mb-1">
            Direcion:
          </label>
          <input
            type="text"
            name="Direcion"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Direcion", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Celular" className="block font-bold mb-1">
            Celular:
          </label>
          <input
            type="tel"
            name="Celular"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Celular", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Email" className="block font-bold mb-1">
            Email:
          </label>
          <input
            type="email"
            name="Email"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Email", e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Client;
