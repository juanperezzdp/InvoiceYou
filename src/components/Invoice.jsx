import { useState, useEffect } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const InvoiceTemplate = () => {
  const { invoiceItems, invoiceProducts, invoiceImg, invoiceFirm } =
    useInvoiceContext();
  const [ClientInvoice, setClientInvoice] = useState(0);
  const InvoiceClient = invoiceItems[ClientInvoice];

  useEffect(() => {
    setClientInvoice(invoiceItems.length - 1);
  }, [invoiceItems]);

  const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript van de 0 a 11
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  console.log("jablame:", invoiceImg);

  return (
    <>
      <div className="fixed h-[95vh] top-2 right-4 xl:right-40 bg-white max-w-md mx-auto p-6 border shadow-md">
        <div>
          <div className="text-center">
            <h6 className="font-semibold mb-2">Factura de Pago</h6>
          </div>

          <div className="mt-4 flex justify-between">
            <div className="text-xs">
              <h2 className="text-xs font-semibold">Cliente</h2>
              <p>Nombre: {InvoiceClient && InvoiceClient.Cliente}</p>
              <p>Dirección: {InvoiceClient && InvoiceClient.Direcion}</p>
              <p>Celular: {InvoiceClient && InvoiceClient.Celular}</p>
              <p>Email: {InvoiceClient && InvoiceClient.Email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Codigo: </p>
              <p className="text-xs text-gray-600">
                Fecha: {getFormattedDate()}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <table className="w-full h-full text-sm text-left dark:text-gray-400">
              <thead className="   bg-sky-100">
                <tr className="border-b hover:table-fixed  ">
                  <th className="p-2 text-xs">Producto</th>
                  <th className="p-2 text-xs">Cantidad</th>
                  <th className="p-2 text-xs">Precio Unidad</th>
                  <th className="p-2 text-xs">Total</th>
                </tr>
              </thead>

              {invoiceProducts.map((data, index) => (
                <>
                  <tbody>
                    <tr key={index} className="border-b">
                      <td className="p-2 text-xs">{data && data.Productos}</td>
                      <td className="p-2 text-center text-xs">
                        {data && data.Cantidad}
                      </td>
                      <td className="p-2 text-center text-xs">
                        {data && data.PricioPorUnidad}
                      </td>
                      <td className="p-2 text-center text-xs">
                        {data.TipoDeDescuento === "Porcentaje" &&
                          data.Descuento}
                      </td>
                      <td className="p-2 text-center text-xs">
                        {data && data.TipoDeDescuento}
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}

              <tfoot className="flex items-center gap-4 max-h-max max-h-full"></tfoot>
            </table>
          </div>
        </div>
        <div className=" flex gap-2">
          {invoiceImg &&
            invoiceImg.slice(-4).map((data, index) => (
              <div key={index}>
                <img className="h-20 " src={data.Img} alt="Img" />
              </div>
            ))}
        </div>
        <div className="w-20">
          <img src={invoiceFirm} alt="Firm" />
        </div>
      </div>
    </>
  );
};

export default InvoiceTemplate;
