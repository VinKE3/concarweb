import Container from "@/app/components/Container";
import Indice from "@/app/components/Indice";
import React from "react";
import { dataSubLibros } from "./librosElectronicos.data";
import Heading from "@/app/components/Heading";

const LibrosElectronicosPage = () => {
  return (
    <Container>
      <Heading
        title="¿Cómo Generar Libros Electrónicos?"
        subtitle="CONCAR® SIRE SQL"
        className="py-6"
        button
        buttonTitle="Volver a Tutoriales"
        buttonHref="/tutoriales"
      />

      <Indice
        id="1."
        title="Libros electrónicos"
        description="Introducción Libros Electrónicos."
        href="/tutoriales/libros-electronicos/layout/libros-electronicos"
        subtittle={dataSubLibros}
      />
    </Container>
  );
};

export default LibrosElectronicosPage;
