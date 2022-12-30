import Nav from "../../components/Nav";
import Hero from "../../components/HomePage/Hero";
import SecCards from "../../components/HomePage/SecCards";
import SecInfo from "../../components/HomePage/SecInfo";
import Foteer from "../../components/Foteer";
import SecMarcas from "../../components/HomePage/SecMarcas";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SecCards />
      <SecInfo />
      <SecMarcas />
      <Foteer />
    </>
  );
};

export default HomePage;
