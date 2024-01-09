import Link from "next/link";
import React from "react";

interface IndiceProps {
  id: string;
  title: string;
  description: string;
  href: string;
  subtittle?: {
    id: string;
    title: string;
    description: string;
    href: string;
    subtitle2?: {
      id: string;
      title: string;
      description: string;
      href: string;
      subtitle3?: {
        id: string;
        title: string;
        description: string;
        href: string;
      }[];
    }[];
  }[];
}

const Indice = () => {
  return (
    <div>
      <h1 className="text-lg bg-gray-200 p-2 text-black mb-4">Índice</h1>
      <div>
        <ul className="divide-y divide-gray-300 bg-gray-300 px-4 border">
          <li className="py-4">
            <Link
              href="/tutoriales/libros"
              className="flex flex-col space-x-4 rounded-lg cursor-pointer hover:bg-gray-400 p-1"
            >
              <span className="text-md font-bold ">
                <span>1.</span> Libros Electrónicos
              </span>
              <p>Introducción Libros Electrónicos</p>
            </Link>
            <ul className="divide-y divide-gray-300 bg-gray-200 rounded-md px-4 py-2 mt-4">
              <li className="py-2">
                <Link
                  href=""
                  className="flex flex-col space-x-4 p-1 rounded-lg cursor-pointer hover:bg-gray-300"
                >
                  <span className="text-md font-medium">
                    <span>1.1</span>Libro electronico registro de compras
                  </span>
                  <p>Introducción Libros Electrónicos</p>
                </Link>
                <ul className="divide-y divide-gray-300 bg-gray-100 rounded-md px-4 py-2 mt-2">
                  <li className="py-2">
                    <Link
                      href=""
                      className="flex flex-col space-x-4 p-1 rounded-lg cursor-pointer hover:bg-gray-200"
                    >
                      <span className="text-md font-medium">
                        <span>1.1.1</span> Generacion del libro electronico de
                        compras
                      </span>
                      <p>Introducción Libros Electrónicos</p>
                    </Link>
                    <ul className="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-2">
                      <li className="py-2">
                        <Link
                          href=""
                          className="flex flex-col space-x-4 p-1 rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                          <span className="text-md font-medium">
                            <span>1.1.1.1</span> Como Generar el libro
                            electronico de compras
                          </span>
                          <p>Introducción Libros Electrónicos</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Indice;
