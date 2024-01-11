import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Indice from "@/app/components/Indice";
import React from "react";

const InstalacionSire = () => {
  return (
    <Container>
      <Heading
        title="Instalación y Actualización del Sire"
        subtitle="Proceso de Instalación y Actualización del Sire SQL"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice
        id="1"
        title="¿Instalar y/o Actualizar CONCAR SIRE SQL? - Incluye Video"
        description="A continuación detallamos como realiza la instalación y/o Actualización del módulo CONCAR SIRE SQL, para ambos casos es el mismo proceso."
        href="/tutoriales/instalacion-sire/instalacion"
      />
    </Container>
  );
};

export default InstalacionSire;
