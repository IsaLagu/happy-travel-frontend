import React from "react";

const DestinationDescription = () => {
  return (
    <div class="font-jaldi grid grid-cols-2 gap-4 mx-auto items-center w-[1136px] h-[557px]">
      <div>
        <img className="rounded-lg" src="https://airgo.mx/wp-content/uploads/2022/02/Turismo-enero.jpg" alt="" />
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="text-5xl font-bold tracking-tight text-red">Los arcos</h5>
          <div className="flex gap-2">
            <img src="public/assets/images/Edit-icon.svg" />
            <img src="public/assets/images/Delete-icon.svg" />
          </div>
        </div>
        <p className="mb-3 text-2xl font-normal text-red ">Puerto Vallarta</p>

        <p className="text-blue text-2xl">
          Ningún viaje a Puerto Vallarta está completo sin una visita a Los Arcos en la Bahía de Banderas, México. Los
          Arcos se llaman así por las enormes islas de granito gris que salen del océano en forma de arco. Los hermosos
          Arcos se encuentran en la Bahía de Banderas en Puerto Vallarta. Están entre la playa Las Gemelas y la playa de
          Mismaloya. Son parte de un parque nacional protegido llamado Parque Marino Los Arcos, que fue fundado en 1984.
        </p>
      </div>
    </div>
  );
};

export default DestinationDescription;
