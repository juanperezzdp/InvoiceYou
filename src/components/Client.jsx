import { useState } from "react";

const Client = () => {
  const [invoiceItems, setInvoiceItems] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newInvoiceItems = [...invoiceItems];
    if (!newInvoiceItems[index]) {
      newInvoiceItems[index] = {};
    }
    newInvoiceItems[index][field] = value;
    setInvoiceItems(newInvoiceItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with invoiceItems array, e.g. send it to an API or process it
    console.log(invoiceItems);
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
            Correo eletronico:
          </label>
          <input
            type="tel"
            name="Email"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Celular", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Deuda" className="block font-bold mb-1">
            Deuda:
          </label>
          <input
            type="number"
            name="Deuda"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Deuda", e.target.value)}
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
