import { Download, Paperclip } from "lucide-react";
import Link from "next/link";
import React from "react";
interface TableProps {
  items?: { id: number; title: string; href: string }[];
}
const Table = ({ items }: TableProps) => {
  return (
    <div className="mt-5 mb-10">
      <div className="flex bg-gray-200 py-4 px-2 gap-2">
        <Paperclip size={24} />
        <h1 className="">ARCHIVOS Y ENLACES</h1>
      </div>
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
          {items &&
            items.map(({ id, title, href }) => {
              return (
                <tr key={id}>
                  <td className="px-6 py-4 whitespace-nowrap">{title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link rel="noopener noreferrer" target="_blank" href={href}>
                      <button className="px-4 py-2 font-medium text-black bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out flex gap-2">
                        <Download size={24} />
                        Descargar
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
