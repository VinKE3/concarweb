import Heading from "@/app/components/Heading";
import TriButtons from "@/app/components/TriButtons";
import Layout from "../../layouts/layoutLibrosElectronicos";

const LibrosElectronicosPage = () => {
  return (
    <Layout
      anterior={false}
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras"
    >
      <Heading
        title="Libros electrónicos"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
      />
      <div className="mt-10 space-y-2">
        <p>
          Según la Resolución 248-2012-SUNAT (26.10.12) se dispuso que desde el
          01 de enero de 2013, están obligados a llevar libros y/o registros
          electrónicos los designados como Principales Contribuyentes (PRICOS).
        </p>
        <p>
          Con fecha 14.01.2013, la SUNAT dispuso que los PRICOS NUEVOS,
          incorporados desde Enero de 2013, están obligados a llevar libros
          electrónicos desde el 01 de Marzo de 2013 y los PRICOS ANTIGUOS están
          obligados a llevar dichos registros desde el 01 de Enero de 2013.
        </p>
        <p>
          Posteriormente la Resolución 379-2013-SUNAT (29.12.13) dispuso que los
          contribuyentes que hayan obtenido ingresos mayores a 500 UIT, entre
          los meses de julio de 2012 a junio de 2013, desde el periodo enero
          2014 tienen la obligación de llevar de manera electrónica el Registro
          de Ventas e Ingresos y el Registro de Compras, a partir del 1 de enero
          del 2014.
        </p>
      </div>
    </Layout>
  );
};

export default LibrosElectronicosPage;
