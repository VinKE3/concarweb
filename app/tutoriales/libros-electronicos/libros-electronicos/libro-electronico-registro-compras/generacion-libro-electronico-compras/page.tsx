import Heading from "@/app/components/Heading";
import Layout from "@/app/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";
import { data } from "../../../libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/libroElectronicoRegistroCompras.data";
import List from "@/app/components/List";

const GeneracionLibroCompras = () => {
  const datos = data[0].links;
  return (
    <Layout
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-ventas"
    >
      <Heading
        title="Generación del Libro Electrónico de Compras"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </Layout>
  );
};

export default GeneracionLibroCompras;
