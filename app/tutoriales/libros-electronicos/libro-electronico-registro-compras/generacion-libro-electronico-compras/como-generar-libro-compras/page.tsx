import Heading from "@/app/components/Heading";
import Table from "@/app/components/Table";
import Layout from "@/app/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const ComoGenerarLibroCompras = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Compras",
      href: "https://miconcar.com/uploads/documentos/841_CONCAR_SQL_Como_generar_el_libro_electronico_de_compras.pdf",
    },
  ];
  return (
    <Layout
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-ventas"
    >
      <Heading
        title="¿Cómo Generar el Libro Electrónico de Compras?"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <h1>
          El presente documento detalla el procedimiento a realizar en el CONCAR
          para generar el libro electrónico de compras.
        </h1>
        <Table items={data} />
      </div>
    </Layout>
  );
};

export default ComoGenerarLibroCompras;
