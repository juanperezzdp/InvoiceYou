import { useState, useEffect } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const InvoiceTemplate = () => {
  const {
    invoiceItems,
    invoiceProducts,
    invoiceImg,
    invoiceFirm,
    invoiceEntity,
    invoiceIva,
  } = useInvoiceContext();
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

  console.log("jablame:", invoiceIva);

  return (
    <>
      <div className="fixed h-[95vh] top-2 right-4 xl:right-40 bg-white w-1/3 p-6 border shadow-md">
        <div>
          <div className="mt-4 flex justify-between">
            <div className="text-[10px]">
              <h2 className="text-[10px] font-semibold">Cliente</h2>
              <p>Nombre: {InvoiceClient && InvoiceClient.Cliente}</p>
              <p>Dirección: {InvoiceClient && InvoiceClient.Direcion}</p>
              <p>Celular: {InvoiceClient && InvoiceClient.Celular}</p>
              <p>Email: {InvoiceClient && InvoiceClient.Email}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-600">Codigo: </p>
              <p className="text-[10px] text-gray-600">
                Fecha: {getFormattedDate()}
              </p>
            </div>
          </div>

          <div className="mt24 overflow-x-auto">
            <table className="h-full text-sm text-left dark:text-gray-400 min-w-full">
              <thead className="w-96 bg-sky-100">
                <tr className="border-b hover:table-fixed  ">
                  <th className="p-2 text-[10px]">Producto</th>
                  <th className="p-2 text-[10px]">Cantidad</th>
                  <th className="p-2 text-[10px]">Precio Unidad</th>
                  <th className="p-2 text-[10px]">Porcentaje</th>
                  <th className="p-2 text-[10px]">Total</th>
                </tr>
              </thead>

              {invoiceProducts && invoiceProducts.length > 0 ? (
                <>
                  {invoiceProducts.map((data, index) => (
                    <>
                      <tbody>
                        <tr key={index} className="border-b">
                          <td className="p-2 text-[10px]">
                            {data && data.Productos}
                          </td>
                          <td className="p-2 text-center text-[10px]">
                            {data && data.Cantidad}
                          </td>
                          <td className="p-2 text-center text-[10px]">
                            {data &&
                              Number(data.PricioPorUnidad).toLocaleString(
                                "en-CO"
                              )}
                          </td>
                          <td className="p-2 text-center text-[10px]">
                            {data.TipoDeDescuento && data.Descuento}
                          </td>
                          <td className="p-2 text-center text-[10px]">
                            {data.Total !== undefined
                              ? data.Total.toLocaleString("en-CO")
                              : 0}
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </>
              ) : (
                <tbody>
                  <tr className="border-b">
                    <td className="pb-1 text-center">...</td>
                    <td className="pb-1 text-center">...</td>
                    <td className="pb-1 text-center">...</td>
                    <td className="pb-1 text-center">...</td>
                    <td className="pb-1 text-center">...</td>
                  </tr>
                </tbody>
              )}

              <tfoot className="flex items-center gap-4 max-h-max max-h-full"></tfoot>
            </table>
          </div>
        </div>
        <div className=" flex gap-2">
          {invoiceEntity &&
            invoiceEntity.map((data, index) => (
              <div key={index}>
                <p>{data.EntidadBancaria}</p>
                <p>{data.CodigoDeReferencia}</p>
              </div>
            ))}
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
          {invoiceFirm && invoiceFirm.length > 0 ? (
            <img src={invoiceFirm} alt="Firm" />
          ) : (
            <p className="text-[10px]">Agrega una Firma</p>
          )}
        </div>
      </div>
    </>
  );
};

export default InvoiceTemplate;
