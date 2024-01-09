import Container from "@/app/components/Container";
import Indice from "@/app/components/Indice";
import React from "react";
import { dataSubLibros } from "./librosElectronicos.data";

const LibrosElectronicosPage = () => {
  return (
    <Container>
      <div className="py-6">
        <h1 className="font-semibold text-2xl text-sky-700">
          Libros Electrónicos
        </h1>
        <h2>Libros electrónicos Compras, Ventas, Diario y Mayor.</h2>
        <p></p>
      </div>
      <Indice
        id="1."
        title="Libros electrónicos"
        description="Introducción Libros Electrónicos."
        href="/tutoriales/instalacion-sire/instalacion"
        subtittle={dataSubLibros}
      />
    </Container>
  );
};

export default LibrosElectronicosPage;
