import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Heading from "@/app/components/Heading";
import React from "react";
import { DataInstalacion } from "./instalacion.data";
import { ColumnProps } from "@/app/components/table/ColumnProps";
import Table from "@/app/components/table/Table";
import Link from "next/link";
import { Download } from "lucide-react";
type Data = {
  name: string;
  job: string;
  location: string;
};
const Instalacionpage = () => {
  const data = [
    {
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      location: "Canada",
    },
    {
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      location: "United States",
    },
    {
      name: "Brice Swyre",
      job: "Tax Accountant",
      location: "China",
    },
  ];
  const columns: Array<ColumnProps<Data>> = [
    {
      key: "name",
      title: "Name",
    },
    {
      key: "job",
      title: "Job",
    },
  ];
  return (
    <Container>
      <Header
        title="Instalación y Actualización"
        href="/tutoriales/instalacion-sire"
        subtitle="Categoría: CONCAR® SIRE SQL"
        text="Instalación y Actualización"
        indice="/tutoriales/instalacion-sire"
      />
      <Heading
        title="¿Instalar y/o Actualizar CONCAR SIRE SQL? - Incluye Video"
        className="py-8"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SIRE SQL"
      />
      <div>
        <h1 className="font-semibold">Consideraciones Generales</h1>
        <ul className="list-disc list-inside">
          {DataInstalacion.map(({ id, titulo }) => {
            return <li key={id}>{titulo}</li>;
          })}
        </ul>
      </div>
      <div className="mt-20 flex flex-col justify-start">
        <h1 className="font-semibold py-2">
          TEMA: ¿Cómo Instalar y/o Actualizar CONCAR SIRE SQL?
        </h1>
        <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wlloU_eriUc?autoplay=0&amp;mute=0&amp;controls=0&"
                id="widget2"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-10">
        <h1 className="bg-gray-200 py-4 px-2">ARCHIVOS Y ENLACES</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                Detalle
              </th>
              <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                Descarga
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                El campo es obligatorio / La llave única es incorrecta.
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href="">
                  <button className="px-4 py-2 font-medium text-black bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out flex gap-2">
                    <Download size={24} />
                    Descargar
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Instalacionpage;
