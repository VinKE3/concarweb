"use client";
import Heading from "@/app/components/Heading";
import { data } from "./libroElectronicoRegistroCompras.data";
import List from "@/app/components/List";
import Layout from "../../layouts/layoutLibrosElectronicos";

const LibroElectronicoRegistroCompraPage = () => {
  return (
    <Layout
      indice="/tutoriales/libros-electronicos"
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-ventas"
    >
      <Heading
        title="Libro Electrónico Registro de Compras"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      {data.map(({ id, title, href, links }) => {
        return (
          <div key={id}>
            <List title={title} href={href} items={links} />
          </div>
        );
      })}
    </Layout>
  );
};

export default LibroElectronicoRegistroCompraPage;
