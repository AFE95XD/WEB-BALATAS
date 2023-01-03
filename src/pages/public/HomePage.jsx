import Nav from "../../components/Nav";
import Hero from "../../components/HomePage/Hero";
import SecCards from "../../components/HomePage/SecCards";
import SecInfo from "../../components/HomePage/SecInfo";
import Foteer from "../../components/Foteer";
import SecMarcas from "../../components/HomePage/SecMarcas";
import SecCompara from "../../components/HomePage/SecCompara";
import SecReviews from "../../components/HomePage/SecReviews";
import SecContacto from "../../components/HomePage/SecContact";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SecCards />
      <SecInfo />
      <SecMarcas />
      <SecCompara />
      <SecReviews />
      <SecContacto />
      <Foteer />
    </>
  );
};

export default HomePage;
