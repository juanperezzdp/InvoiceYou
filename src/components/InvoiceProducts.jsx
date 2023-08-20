import React from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";

const InvoiceProducts = () => {
  const { invoiceProducts } = useInvoiceContext();

  return (
    <div className="overflow-x-auto">
      <table className="h-full text-sm text-left dark:text-gray-400 min-w-full">
        <thead className="w-96 bg-sky-100">
          <tr className="border-b hover:table-fixed  ">
            <th className="pt-2 pb-2 text-center text-[10px]">Producto</th>
            <th className="pt-2 pb-2 text-center text-[10px]">Cantidad</th>
            <th className="pt-2 pb-2 text-center text-[10px]">Precio Unidad</th>
            <th className="pt-2 pb-2 text-center text-[10px]">Porcentaje</th>
            <th className="pt-2 pb-2 text-center text-[10px]">Total</th>
          </tr>
        </thead>

        {invoiceProducts && invoiceProducts.length > 0 ? (
          <>
            {invoiceProducts.map((data, index) => (
              <>
                <tbody>
                  <tr key={index} className="border-b">
                    <td className="pt-1 pb-1 text-center text-[7px]">
                      {data && data.Productos}
                    </td>
                    <td className="pt-1 pb-1 text-center text-[7px]">
                      {data && data.Cantidad}
                    </td>
                    <td className="pt-1 pb-1 text-center text-[7px]">
                      {data &&
                        Number(data.PricioPorUnidad).toLocaleString("en-CO")}
                    </td>
                    <td className="pt-1 pb-1 text-center text-[7px]">
                      {data.TipoDeDescuento ? data.Descuento : 0}
                    </td>
                    <td className="pt-1 pb-1 text-center text-[7px]">
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
      </table>
    </div>
  );
};

export default InvoiceProducts;
