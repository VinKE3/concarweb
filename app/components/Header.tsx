"use client";
import { ArrowLeft, ArrowRight, Book, List } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  href: string;
  subtitle?: string;
  text?: string;
  center?: boolean;
  className?: string;
  indice?: string;
  anterior?: boolean;
  anteriorHref?: string;
  siguiente?: boolean;
  siguienteHref?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  href,
  subtitle,
  text,
  center,
  className,
  indice,
  anterior,
  anteriorHref,
  siguiente,
  siguienteHref,
}) => {
  return (
    <div
      className={`{
      ${center ? "text-center" : ""} bg-gray-200 p-4 mt-2 ${className}
    }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Link href={href}>
            <h1 className="text-2xl font-bold text-sky-700">{title}</h1>
          </Link>
          <h2 className="font-light text-gray-700 mt-2">{subtitle}</h2>
          <p className="font-light text-gray-700 mt-2">{text}</p>
        </div>
        <div className="">
          <div className="flex py-4 gap-2 justify-center md:justify-end">
            <Link href={indice || ""}>
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-500  py-2 px-4 rounded flex gap-2">
                <List size={24} />
                Índice
              </button>
            </Link>
            {anterior && (
              <Link href={anteriorHref || ""}>
                <button className="bg-gray-50 hover:bg-gray-100 text-gray-500  py-2 px-4 rounded flex gap-2">
                  <ArrowLeft size={24} />
                  Anterior
                </button>
              </Link>
            )}
            {siguiente && (
              <Link href={siguienteHref || ""}>
                <button className="bg-gray-50 hover:bg-gray-100 text-gray-500  py-2 px-4 rounded flex gap-2">
                  Siguiente
                  <ArrowRight size={24} />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
