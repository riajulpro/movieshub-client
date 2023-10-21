import { Helmet } from "react-helmet";
import Banner from "../../components/Home/Banner";
import Brands from "../../components/Home/Brands";
import TopRated from "../../components/Home/TopRated";
import StateData from "../../components/Home/StateData";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MoviesHub - All the Animation movies are here</title>
      </Helmet>
      <Banner />
      <Brands />
      <TopRated />
      <StateData />
    </>
  );
};

export default Home;
