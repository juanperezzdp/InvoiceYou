import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoiceContext = () => useContext(InvoiceContext);

export const InvoiceProvider = ({ children }) => {
  const [invoiceEmpresa, setInvoiceEmpresa] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceProducts, setInvoiceProducts] = useState([]);
  const [invoiceImg, setInvoiceImg] = useState([]);
  const [invoiceFirm, setInvoiceFirm] = useState([]);
  const [invoiceEntity, setInvoiceEntity] = useState([]);
  const [invoiceIva, setInvoiceIva] = useState([]);
  const [invoiceDescripcion, setInvoiceDescripcion] = useState([]);

  const handleInputEmpresa = (Empresa) => {
    setInvoiceEmpresa(Empresa);
  };
  const handleInputChangee = (items) => {
    setInvoiceItems(items);
  };
  const handleInputProducts = (Products) => {
    setInvoiceProducts((prevInvoiceProducts) => [
      ...prevInvoiceProducts,
      ...Products.map((product) => ({ ...product })),
    ]);
  };
  const handleInputImg = (Img) => {
    setInvoiceImg((prevInvoiceImg) => [...prevInvoiceImg, { Img }]);
  };

  const handleInputEntity = (Entity) => {
    setInvoiceEntity(Entity);
  };
  const handleInputIva = (Iva) => {
    setInvoiceIva(Iva);
  };
  const handleInputDescripcion = (Descripcion) => {
    setInvoiceDescripcion(Descripcion);
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoiceEmpresa,
        handleInputEmpresa,
        invoiceItems,
        handleInputChangee,
        invoiceProducts,
        handleInputProducts,
        invoiceImg,
        handleInputImg,
        invoiceFirm,
        setInvoiceFirm,
        invoiceEntity,
        handleInputEntity,
        invoiceIva,
        handleInputIva,
        invoiceDescripcion,
        handleInputDescripcion,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
