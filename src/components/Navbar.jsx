import React from "react";
import { AiOutlineUserSwitch, AiFillFileText } from "react-icons/ai";
import { PiSignatureDuotone } from "react-icons/pi";
import { TbPhotoPlus } from "react-icons/tb";
import { FaPercentage } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { useFloatingWindow } from "../Context/ContextComponents";

const Navbar = () => {
  const { setActiveComponent } = useFloatingWindow();

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <nav className="flex flex-col h-screen w-40 bg-indigo-700">
      <div className="gap-2 mt-8">
        <div
          onClick={() => handleClick("cliente")}
          className="flex items-center pl-4 text-white gap-1 hover:bg-indigo-600 cursor-pointer h-12 w-40"
        >
          <AiOutlineUserSwitch className="fas fa-heart text-2xl" />
          <h3>Cliente</h3>
        </div>
        <div
          onClick={() => handleClick("producto")}
          className="flex items-center pl-4 text-white gap-1 hover:bg-indigo-600 cursor-pointer h-12 w-40"
        >
          <AiFillFileText className="fas fa-heart text-2xl" />
          <h3>Productos</h3>
        </div>
        <div
          onClick={() => handleClick("foto")}
          className="flex items-center pl-4 text-white gap-1 hover:bg-indigo-600 cursor-pointer h-12 w-40"
        >
          <TbPhotoPlus className="fas fa-heart text-2xl" />
          <h3>Fotos</h3>
        </div>
        <div
          onClick={() => handleClick("firma")}
          className="flex items-center pl-4 text-white gap-1 hover:bg-indigo-600 cursor-pointer h-12 w-40"
        >
          <PiSignatureDuotone className="fas fa-heart text-2xl" />
          <h3>Firma</h3>
        </div>
        <div
          onClick={() => handleClick("iva")}
          className="flex items-center pl-4 text-white gap-1 hover:bg-indigo-600 cursor-pointer h-12 w-40"
        >
          <FaPercentage className="fas fa-heart text-xl" />
          <h3>IVA</h3>
        </div>
        <div
          onClick={() => handleClick("entidad")}
          className="flex items-center pl-4 text-white gap-1 hover:bg-indigo-600 cursor-pointer h-12 w-40"
        >
          <BiSolidBank className="fas fa-heart text-2xl" />
          <h3>Entidad</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
