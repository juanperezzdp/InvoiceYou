import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoiceContext = () => useContext(InvoiceContext);

export const InvoiceProvider = ({ children }) => {
  const [invoiceItems, setInvoiceItems] = useState([]);

  const handleInputChangee = (items) => {
    setInvoiceItems((prevInvoiceItems) => [...prevInvoiceItems, ...items]);
  };

  return (
    <InvoiceContext.Provider value={{ invoiceItems, handleInputChangee }}>
      {children}
    </InvoiceContext.Provider>
  );
};
