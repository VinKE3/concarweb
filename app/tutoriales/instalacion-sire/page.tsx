import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Indice from "@/app/components/Indice";
import React from "react";

const InstalacionSire = () => {
  return (
    <Container>
      <div className="py-6">
        <h1 className="font-semibold text-2xl text-sky-700">
          Instalación y Actualización
        </h1>
        <h2>Instalación y Actualización</h2>
        <p></p>
      </div>
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice
        id="1"
        title="¿Instalar y/o Actualizar CONCAR SIRE SQL? - Incluye Video"
        description="A continuación detallamos como realiza la instalación y/o Actualización del módulo CONCAR SIRE SQL, para ambos casos es el mismo proceso."
        href="/tutoriales/instalacion-sire/layout/instalacion"
      />
    </Container>
  );
};

export default InstalacionSire;
