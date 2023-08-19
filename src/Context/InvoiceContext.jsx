import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoiceContext = () => useContext(InvoiceContext);

export const InvoiceProvider = ({ children }) => {
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceProducts, setInvoiceProducts] = useState([]);
  const [invoiceImg, setInvoiceImg] = useState([]);
  const [invoiceFirm, setInvoiceFirm] = useState([]);
  const [invoiceEntity, setInvoiceEntity] = useState([]);
  const [invoiceIva, setInvoiceIva] = useState([]);

  const handleInputChangee = (items) => {
    setInvoiceItems((prevInvoiceItems) => [...prevInvoiceItems, ...items]);
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
    setInvoiceEntity((prevInvoiceEntity) => [...prevInvoiceEntity, ...Entity]);
  };
  const handleInputIva = (Iva) => {
    setInvoiceIva((prevInvoiceIva) => [...prevInvoiceIva, ...Iva]);
  };

  return (
    <InvoiceContext.Provider
      value={{
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
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
