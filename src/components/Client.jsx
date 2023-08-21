import { useRef, useState } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const Client = () => {
  const [invoiceClient, setInvoiceClient] = useState([]);
  const { handleInputChangee } = useInvoiceContext();
  const formRef = useRef(null);

  const handleInputChange = (index, field, value) => {
    const newInvoiceClient = [...invoiceClient];
    if (!newInvoiceClient[index]) {
      newInvoiceClient[index] = {};
    }
    newInvoiceClient[index][field] = value;
    setInvoiceClient(newInvoiceClient);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputChangee(invoiceClient);
    formRef.current.reset();
    setInvoiceClient([]);
  };

  return (
    <div className="flex justify-center w-[100%] p-4 z-10 fixed top-8  // sm:top-4 sm:justify-start sm:w-auto sm:left-40 ">
      <form
        ref={formRef}
        className="w-96 h-max  p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <label htmlFor="Cliente" className="block font-bold mb-1">
            Cliente:
          </label>
          <input
            required
            maxLength={25}
            type="text"
            name="Cliente"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Cliente", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Direcion" className="block font-bold mb-1">
            Dirección:
          </label>
          <input
            required
            maxLength={32}
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
            required
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={20}
            type="tel"
            name="Celular"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) =>
              handleInputChange(0, "Celular", Number(e.target.value))
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="Email" className="block font-bold mb-1">
            Email:
          </label>
          <input
            required
            type="email"
            name="Email"
            className="w-50 p-1 mb-2 border rounded-sm"
            onChange={(e) => handleInputChange(0, "Email", e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-800 hover:bg-emerald-600 text-white px-4 py-2 rounded w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Client;
