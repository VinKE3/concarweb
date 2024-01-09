import React from "react";
import Container from "../components/Container";
import Acordion from "../components/acordion/Acordion";
import { dataSireSql, dataConcar } from "./tuturiales.data";

const TutorialesPage = () => {
  return (
    <div>
      <Container>
        <div className="md:p-10 p-2">
          <h1 className="text-sky-800 font-bold">Tutoriales</h1>
          <div>
            <h2 className="px-2 pt-2 text-black font-bold">
              Productos SQL - NET
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:p-2 p-0">
                <Acordion
                  id="1"
                  title="CONCAR SIRE SQL"
                  description={dataSireSql}
                />
              </div>
              <div className="md:p-2 p-0">
                <Acordion id="2" title="CONCAR SQL" description={dataConcar} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TutorialesPage;
