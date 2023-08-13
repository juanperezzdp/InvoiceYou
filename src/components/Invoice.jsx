import React from "react";

const InvoiceTemplate = ({ invoiceItems }) => {
  return (
    <div className="fixed top-4 right-40 bg-white max-w-md mx-auto p-6 border shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Factura de Pago</h1>
        <p className="text-gray-600">Fecha: 12 de Agosto de 2023</p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Cliente:</h2>
        <p>Nombre: Juan Pérez</p>
        <p>Dirección: Calle Principal 123</p>
        <p>Email: juan@example.com</p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Detalles del Pedido:</h2>
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

      <div className="mt-6 text-center">
        <p className="text-gray-600">¡Gracias por tu compra!</p>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
