import { useState, useEffect } from "react";
import { useInvoiceContext } from "../Context/InvoiceContext";
import InvoiceProducts from "../components/InvoiceProducts";

const Invoice = () => {
  const {
    invoiceEmpresa,
    invoiceProducts,
    invoiceItems,
    invoiceImg,
    invoiceFirm,
    invoiceEntity,
    invoiceIva,
    invoiceDescripcion,
  } = useInvoiceContext();
  const [EmpresaInvoice, setEmpresaInvoice] = useState(0);
  const [ClientInvoice, setClientInvoice] = useState(0);
  const [IvaInvoice, setIvaInvoice] = useState(0);
  const [newCode, setNewCode] = useState(0);

  const InvoiceEmpresa = invoiceEmpresa[EmpresaInvoice];
  const InvoiceClient = invoiceItems[ClientInvoice];
  const InvoiceIva = invoiceIva[IvaInvoice];

  useEffect(() => {
    setEmpresaInvoice(invoiceEmpresa.length - 1);
    setClientInvoice(invoiceItems.length - 1);
    setIvaInvoice(invoiceIva.length - 1);
  }, [invoiceItems, invoiceIva, invoiceEmpresa]);

  useEffect(() => {
    const number = Math.floor(Math.random() * 1000000);
    const letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const generatedCode = `${number}-${letter}`;
    setNewCode(generatedCode);
  }, []);

  const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const InvoiceIvap = InvoiceIva || { ImpuestoValorAgregado: 0 };
  const ivaPercentage = InvoiceIvap.ImpuestoValorAgregado || 0;
  const totalWithoutDiscount = invoiceProducts.reduce(
    (total, data) => total + data.Total,
    0
  );
  const discount = (totalWithoutDiscount * ivaPercentage) / 100;
  const totalPriceAfterDiscount = totalWithoutDiscount - discount;

  console.log("jablame:", invoiceDescripcion);

  return (
    <>
      <div className="absolute h-[40rem] top-2 right-4 xl:right-40 bg-white w-1/3 pl-6 pr-6 border shadow-md">
        <div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-[10px] flex gap-1 items-end">
                Codigo: <p className="text-green-700 text-[15px]"> {newCode}</p>
              </p>
              <p className="text-[10px]">Fecha: {getFormattedDate()}</p>
              <div className="text-[10px] w-40">
                <p>Empresa: {InvoiceEmpresa && InvoiceEmpresa.Empresa}</p>
                <p>Dirección: {InvoiceEmpresa && InvoiceEmpresa.Direcion}</p>
                <p>Celular: {InvoiceEmpresa && InvoiceEmpresa.Celular}</p>
                <p>Email: {InvoiceEmpresa && InvoiceEmpresa.Email}</p>
                <p>Nit: {InvoiceEmpresa && InvoiceEmpresa.Nit}</p>
              </div>
            </div>
            <div className="text-[10px]">
              <h2 className="text-sm font-bold">Cliente</h2>
              <div>
                <p>Nombre: {InvoiceClient && InvoiceClient.Cliente}</p>
                <p>Dirección: {InvoiceClient && InvoiceClient.Direcion}</p>
                <p>Celular: {InvoiceClient && InvoiceClient.Celular}</p>
                <p>Email: {InvoiceClient && InvoiceClient.Email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-60">
          <InvoiceProducts />
        </div>

        <div className="flex justify-between ">
          <div className=" flex gap-2 ">
            <div>
              <p className="text-xs font-semibold">Instrucciones de pagos</p>
              <p className="text-[10px]">
                A traves de {invoiceEntity && invoiceEntity.EntidadBancaria}
              </p>
              <p className="text-[10px]">
                Codigo de referencia
                {invoiceEntity && invoiceEntity.CodigoDeReferencia}
              </p>
            </div>
          </div>
          <div className="bg-slate-100 pl-2 border-b-4">
            <div className="flex gap-3 w-40">
              <div className="flex gap-1">
                <h3 className="text-xs font-semibold">Total parcial</h3>
                <p className="text-xs">{`$${totalWithoutDiscount.toLocaleString(
                  "en-CO"
                )}`}</p>
              </div>
            </div>

            <div className="flex gap-1">
              <h3 className="text-xs font-semibold">IVA</h3>
              <p className="text-[10px]">
                {InvoiceIva
                  ? `( ${InvoiceIva.ImpuestoValorAgregado}% )`
                  : "( 0% )"}
              </p>
            </div>

            <div className="flex gap-1">
              <h3 className="text-ms font-semibold">Total</h3>
              <p className="text-ms">
                {`$${totalPriceAfterDiscount.toLocaleString("en-CO")}`}
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-end justify-end h-18">
          <div className="border-b-slate-800 border-b-2">
            {invoiceFirm && invoiceFirm.length > 0 ? (
              <img className="h-10" src={invoiceFirm} alt="Firm" />
            ) : (
              <p className=" text-[10px]">Agrega una Firma</p>
            )}
          </div>
          <p className="text-[0.6rem]">Fecha firmada</p>
          <p className="text-[0.6rem]">{getFormattedDate()}</p>
        </div>

        <div className=" max-h-20 overflow-hidden  bg-slate-600 flex">
          <p className="text-xs">{invoiceDescripcion[0]?.Descripcion}</p>
        </div>

        <div className=" flex gap-2">
          {invoiceImg &&
            invoiceImg.slice(-4).map((data, index) => (
              <div key={index}>
                <img className="h-12 " src={data.Img} alt="Img" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Invoice;
