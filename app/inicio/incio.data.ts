import { InicioData } from "./incio.types";
import { Youtube, BookOpenCheck } from "lucide-react";
export const dataInicio: InicioData = [
  {
    id: 1,
    title: "Tutorial de instalación",
    href: "/tutoriales",
    icon: Youtube,
    description: "Acceda a toda la información del CONCAR® y sus módulos.",
  },
  {
    id: 2,
    title: "Manuales de instalación",
    href: "/manuales",
    icon: BookOpenCheck,
    description: "Acceda a toda la información del CONCAR® y sus módulos.",
  },
  {
    id: 3,
    title: "Temas",
    href: "/temas",
    icon: BookOpenCheck,
    description:
      "Navegue por los distintos temas de interes de nuestra biblioteca digital.",
  },
  {
    id: 4,
    title: "Palabras claves",
    href: "/palabras-claves",
    icon: BookOpenCheck,
    description:
      "Agilice la búsqueda de su documento, utilizando nuestro índice de palabras claves.",
  },
];
