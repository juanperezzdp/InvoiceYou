import { useInvoiceContext } from "../Context/InvoiceContext";

const InvoiceProducts = () => {
  const { invoiceProducts } = useInvoiceContext();

  return (
    <div className="overflow-x-auto">
      <table className="h-full text-sm text-left dark:text-gray-400 min-w-full">
        <thead className="w-96 bg-indigo-100">
          <tr className="border-b hover:table-fixed  ">
            <th className="pt-2 pb-2 text-center text-[8px] // sm:text-[10px]">
              Producto
            </th>
            <th className="pt-2 pb-2 text-center text-[8px] // sm:text-[10px]">
              Cantidad
            </th>
            <th className="pt-2 pb-2 text-center text-[8px] // sm:text-[10px]">
              Precio Unidad
            </th>
            <th className="pt-2 pb-2 text-center text-[8px] // sm:text-[10px]">
              Porcentaje
            </th>
            <th className="pt-2 pb-2 text-center text-[8px] // sm:text-[10px]">
              Total
            </th>
          </tr>
        </thead>

        {invoiceProducts && invoiceProducts.length > 0 ? (
          <>
            {invoiceProducts.map((data, index) => (
              <>
                <tbody>
                  <tr key={index} className="border-b">
                    <td className=" text-center text-[6px] // sm:pt-1 sm:pb-1 sm:text-[7px]">
                      {data && data.Productos}
                    </td>
                    <td className="text-center text-[6px] // sm:pt-1 sm:pb-1 sm:text-[7px]">
                      {data && data.Cantidad}
                    </td>
                    <td className="text-center text-[6px] // sm:pt-1 sm:pb-1 sm:text-[7px]">
                      {data &&
                        Number(data.PricioPorUnidad).toLocaleString("en-CO")}
                    </td>
                    <td className=" text-center text-[6px] // sm:pt-1 sm:pb-1 sm:text-[7px]">
                      {(data.TipoDeDescuento === "Porcentaje" &&
                        data.Descuento) ||
                        (data.TipoDeDescuento === "TarifaPlana" && 0) ||
                        (data.TipoDeDescuento === undefined && 0)}
                    </td>
                    <td className="text-center text-[6px]  // sm:pt-1 sm:pb-1 sm:text-[7px]">
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
