import Nav from "../../components/Nav";
import Hero from "../../components/HomePage/Hero";
import SecCards from "../../components/HomePage/SecCards";
import SecInfo from "../../components/HomePage/SecInfo";
import Foteer from "../../components/Foteer";
import SecMarcas from "../../components/HomePage/SecMarcas";
import SecCompara from "../../components/HomePage/SecCompara";
import SecReviews from "../../components/HomePage/SecReviews";
import SecContacto from "../../components/HomePage/SecContact";
// import SecMapa from "../../components/HomePage/SecMapa";

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
      {/* <SecMapa /> */}
      <SecContacto />
      <Foteer />
    </>
  );
};

export default HomePage;
