import Container from "@/app/components/Container";
import Indice from "@/app/components/Indice";
import React from "react";
import { dataCierreAperturaContable, dataProcesoApertura } from "./cierre.data";
import Heading from "@/app/components/Heading";

const CierreAperturaPage = () => {
  return (
    <Container>
      <div className="py-4">
        <Heading
          title="Cierre y Apertura Contable"
          subtitle="Proceso de Cierre y Apertura contable."
        />
      </div>
      <Heading title="Indice" />
      <Indice
        id="1"
        title="Proceso de Cierre"
        description="Proceso de Cierre"
        href="/tutoriales/cierre-apertura-contable/proceso-cierre"
        subtittle={dataCierreAperturaContable}
      />
      <Indice
        id="2"
        title="Proceso de Apertura"
        description="Cómo generar el asiento de apertura"
        href="/tutoriales/cierre-apertura-contable/proceso-apertura"
        subtittle={dataProcesoApertura}
      />
    </Container>
  );
};

export default CierreAperturaPage;
