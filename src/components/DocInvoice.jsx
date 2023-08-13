import React from "react";

const DocInvoice = ({ invoiceItems }) => {
  console.log("jablame", invoiceItems);
  return (
    <div>
      {invoiceItems &&
        invoiceItems.map((data, index) => (
          <div key={index}>
            <h1>{data.Cliente}</h1>
            <h1>{data.Celular}</h1>
            <h1>{data.Cliente}</h1>
            <h1>{data.Cliente}</h1>
          </div>
        ))}
    </div>
  );
};

export default DocInvoice;
