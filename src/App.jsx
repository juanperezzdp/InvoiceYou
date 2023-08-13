import React from "react";
import Navbar from "./components/Navbar";
import Client from "./components/Client";
import { useFloatingWindow } from "./Context/ContextComponents";
import Products from "./components/Products";
import Firm from "./components/Firm";
import Capture from "./components/Capture";
import ProductGuide from "./components/ProductGuide";
import InvoiceTemplate from "./components/Invoice";

const App = () => {
  const { activeComponent } = useFloatingWindow();

  return (
    <>
      <Navbar />
      {activeComponent === null && <ProductGuide />}
      {activeComponent === "cliente" && <Client />}
      {activeComponent === "products" && <Products />}
      {activeComponent === "foto" && <Capture />}
      {activeComponent === "firma" && <Firm />}
      <InvoiceTemplate />
    </>
  );
};

export default App;
