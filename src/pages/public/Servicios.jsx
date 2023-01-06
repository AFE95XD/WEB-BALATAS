import Nav from "../../components/Nav";
import Foteer from "../../components/Foteer";
import ServiciosHeader from "../../components/Servicios/ServiciosHeader";
import ServiciosInfo from "../../components/Servicios/ServiciosInfo";
import SecServiciosBaner from "../../components/Servicios/SecServiciosBaner";
import ServiciosGaleria from "../../components/Servicios/ServiciosGaleria";

const Servicios = () => {
  return (
    <>
      <Nav />
      <ServiciosHeader />
      <ServiciosInfo />
      <SecServiciosBaner />
      <ServiciosGaleria />
      <Foteer />
    </>
  );
};

export default Servicios;
