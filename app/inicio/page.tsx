import React from "react";
import Link from "next/link";
import { dataInicio } from "./incio.data";

const InicioPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-gray-600 uppercase font-bold mt-5">
          Soporte y Asistencia
        </h1>
        {dataInicio.map(({ id, href, icon: Icon, title, description }) => {
          return (
            <Link key={id} href={href}>
              <div className="w-full max-w-2xl my-8 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-2 md:py-6 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg bg-slate-100 hover:bg-slate-300 cursor-pointer">
                <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                  <Icon className="w-24 h-24 rounded-lg" />
                </div>
                <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                  <p
                    className="font-display mb-2 text-2xl font-semibold dark:text-gray-600"
                    itemProp="author"
                  >
                    {title}
                  </p>

                  <div className="mb-4 md:text-lg text-gray-400">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default InicioPage;
