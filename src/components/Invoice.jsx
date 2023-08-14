import React, { useState, useEffect } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const InvoiceTemplate = () => {
  const { invoiceItems } = useInvoiceContext();
  const [currentInvoiceIndex, setCurrentInvoiceIndex] = useState(0);
  const currentInvoice = invoiceItems[currentInvoiceIndex];

  useEffect(() => {
    setCurrentInvoiceIndex(invoiceItems.length - 1);
  }, [invoiceItems]);

  const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript van de 0 a 11
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="fixed h-96 top-4 right-40 bg-white max-w-md mx-auto p-6 border shadow-md">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Factura de Pago</h1>
          <p className="text-gray-600">Fecha: {getFormattedDate()}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Cliente</h2>
          <div className="text-xs">
            <p>Nombre: {currentInvoice && currentInvoice.Cliente}</p>
            <p>Dirección: {currentInvoice && currentInvoice.Direcion}</p>
            <p>Celular: {currentInvoice && currentInvoice.Celular}</p>
            <p>Email: {currentInvoice && currentInvoice.Email}</p>
          </div>
        </div>

        <div className="mt-4">
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr className="border-b">
                <th className="py-2">Producto</th>
                <th className="py-2">Cantidad</th>
                <th className="py-2">Precio Unitario</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Producto A</td>
                <td className="py-2">2</td>
                <td className="py-2">$50.00</td>
                <td className="py-2">$100.00</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Producto B</td>
                <td className="py-2">1</td>
                <td className="py-2">$75.00</td>
                <td className="py-2">$75.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="py-2 text-right font-semibold">
                  Total:
                </td>
                <td className="py-2">$175.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
