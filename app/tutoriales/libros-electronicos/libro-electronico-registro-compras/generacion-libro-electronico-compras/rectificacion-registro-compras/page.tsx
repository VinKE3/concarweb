import Heading from "@/app/components/Heading";
import Table from "@/app/components/Table";
import Layout from "@/app/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const RectificacionRegistroCompras = () => {
  const data = [
    {
      id: 1,
      title:
        "Rectificación - Registros Adicionales en Registro de Compras Electrónico",
      href: "https://miconcar.com/uploads/documentos/868_CONCAR_CB_Rectificacion_registros_adicionales_en_registro_de_compras_electronico.pdf",
    },
    {
      id: 2,
      title: "Registros Adicionales en Registro de Compras.",
      href: "https://miconcar.com/uploads/documentos/868_concar_cb_sql_registros_adicionales_registro_de_compras_v13.pdf",
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
        title="Rectificación - Registros Adicionales en Registro de Compras Electrónico"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </Layout>
  );
};

export default RectificacionRegistroCompras;
