import Navbar from "./components/Navbar";
import Empresa from "./components/Empresa";
import Client from "./components/Client";
import { useFloatingWindow } from "./Context/ContextComponents";
import Products from "./components/Products";
import Firm from "./components/Firm";
import Capture from "./components/Capture";
import ProductGuide from "./components/ProductGuide";
import Invoice from "./components/Invoice";
import { InvoiceProvider } from "./Context/InvoiceContext";
import Iva from "./components/Iva";
import Entidad from "./components/Entidad";
import Descripcion from "./components/Descripcion";

const App = () => {
  const { activeComponent } = useFloatingWindow();

  return (
    <>
      <InvoiceProvider>
        <Navbar />
        {activeComponent === null && <ProductGuide />}
        {activeComponent === "empresa" && <Empresa />}
        {activeComponent === "cliente" && <Client />}
        {activeComponent === "producto" && <Products />}
        {activeComponent === "foto" && <Capture />}
        {activeComponent === "firma" && <Firm />}
        {activeComponent === "iva" && <Iva />}
        {activeComponent === "entidad" && <Entidad />}
        {activeComponent === "descripcion" && <Descripcion />}
        {activeComponent === "x" && null}

        <Invoice />
      </InvoiceProvider>
    </>
  );
};

export default App;
