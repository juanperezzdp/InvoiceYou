import React from "react";
import Navbar from "./components/Navbar";
import Client from "./components/Client";
import { useFloatingWindow } from "./Context/ContextComponents";
import Products from "./components/Products";
import Firm from "./components/Firm";
import Capture from "./components/Capture";
import ProductGuide from "./components/ProductGuide";
import InvoiceTemplate from "./components/Invoice";
import { InvoiceProvider } from "./Context/InvoiceContext";
import Iva from "./components/Iva";
import Entidad from "./components/Entidad";

const App = () => {
  const { activeComponent } = useFloatingWindow();

  return (
    <>
      <InvoiceProvider>
        <Navbar />
        {activeComponent === null && <ProductGuide />}
        {activeComponent === "cliente" && <Client />}
        {activeComponent === "producto" && <Products />}
        {activeComponent === "foto" && <Capture />}
        {activeComponent === "firma" && <Firm />}
        {activeComponent === "iva" && <Iva />}
        {activeComponent === "iva" && <Iva />}
        {activeComponent === "entidad" && <Entidad />}
        <InvoiceTemplate />
      </InvoiceProvider>
    </>
  );
};

export default App;
