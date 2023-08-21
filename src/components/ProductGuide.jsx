import React from "react";
import Gif from "../img/animation.mp4";

const ProductGuide = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col w-[20rem] h-[97vh] items-center bg-white rounded-lg shadow-md p-4 z-50 fixed top-1 left-40 mt-2 ml-4">
        <div>
          <h6 className="text-2xl text-indigo-900">
            ¡Bienvenido a InvoiceYou!
          </h6>
          <p className="text-xs text-center">Guia practica de faturaciones</p>
        </div>

        <div>
          <p className="mb-2 text-[10px] text-justify">
            En la sección "Empresa", ingrese en el formulario los datos
            completos de la empresa.
          </p>

          <p className="mb-2 text-[10px] text-justify">
            En la sección "Cliente", ingrese en el formulario los datos
            completos del destinatario de la facturación.
          </p>

          <p className="mb-2 text-[10px] text-justify">
            Dentro de la sección "Productos", por favor complete el formulario
            con los datos de los productos, considerando que habrá solo 9
            productos en la facturación.
          </p>

          <p className="mb-2 text-[10px] text-justify">
            Dentro de la sección "Fotos", tienes la opción de añadir imágenes de
            los productos en caso de que estén en malas condiciones o si han
            sido entregados en buen estado.
          </p>

          <p className="mb-2 text-[10px] text-justify">
            En la sección "Firma", el cliente al que va dirigida la facturación
            deberá proporcionar su firma.
          </p>

          <p className="mb-2 text-[10px] text-justify">
            En la sección "IVA", complete el formulario con el porcentaje del
            Impuesto al Valor Agregado (IVA).
          </p>

          <p className="mb-2 text-[10px] text-justify">
            En la sección "Entidad", complete el formulario con el nombre de la
            entidad bancaria donde el cliente realizó el pago.
          </p>
        </div>

        <div className="w-60 ">
          <video autoPlay loop muted src={Gif}>
            <source src={Gif} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default ProductGuide;
