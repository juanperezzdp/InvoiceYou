import React from "react";
import { AiOutlineUserSwitch, AiFillFileText } from "react-icons/ai";
import { PiSignatureDuotone } from "react-icons/pi";
import { TbPhotoPlus } from "react-icons/tb";
import { FaPercentage } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { useFloatingWindow } from "../Context/ContextComponents";

const Navbar = () => {
  const { setActiveComponent } = useFloatingWindow();

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <nav className="flex fixed justify-center bottom-0 h-20 w-[100%] bg-indigo-700 // sm:justify-start sm:static sm:flex-col sm:h-[45rem] sm:w-40 sm:bg-indigo-700">
      <div className="flex items-center justify-center gap-2 // sm:mt-8 sm:items-start sm:flex-col sm:gap-2 ">
        <div
          onClick={() => handleClick("empresa")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <MdAddBusiness className=" fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Empresa</h3>
        </div>
        <div
          onClick={() => handleClick("cliente")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <AiOutlineUserSwitch className="fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Cliente</h3>
        </div>
        <div
          onClick={() => handleClick("producto")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <AiFillFileText className="fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Productos</h3>
        </div>
        <div
          onClick={() => handleClick("foto")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <TbPhotoPlus className="fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Fotos</h3>
        </div>
        <div
          onClick={() => handleClick("firma")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <PiSignatureDuotone className="fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Firma</h3>
        </div>
        <div
          onClick={() => handleClick("iva")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <FaPercentage className="fas fa-heart sm:text-xl" />
          <h3 className="text-[0.7rem] sm:text-base">IVA</h3>
        </div>
        <div
          onClick={() => handleClick("entidad")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <BiSolidBank className="fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Entidad</h3>
        </div>
        <div
          onClick={() => handleClick("descripcion")}
          className="flex flex-col items-center h-20 justify-center text-white cursor-pointer // sm:gap-2 sm:hover:bg-indigo-600 sm:justify-start sm:h-12 sm:flex-row sm:w-40 sm:flex sm:items-center sm:pl-4"
        >
          <BsChatText className="fas fa-heart sm:text-2xl" />
          <h3 className="text-[0.7rem] sm:text-base">Descripción</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
