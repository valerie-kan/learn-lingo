import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Statistic from "../components/Statistic/Statistic";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Statistic />
      </Container>
    </>
  );
};

export default Home;
