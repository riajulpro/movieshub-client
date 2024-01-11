import { Helmet } from "react-helmet";
import Features from "../../components/newUI/Home/Features";
import LatestMovies from "../../components/newUI/Home/LatestMovies";
import MoviesList from "../../components/newUI/Home/MoviesList";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MoviesHub - All the Animation movies are here</title>
      </Helmet>
      <div className="template w-full lg:w-10/12 lg:mx-auto m-3 lg:m-0 lg:mt-3 grid grid-cols-12 gap-3">
        <div className="m-3 md:m-0 col-span-12 md:col-span-9">
          <Features />
          <MoviesList />
        </div>
        <div className="m-3 md:m-0 col-span-12 md:col-span-3">
          <LatestMovies />
        </div>
      </div>
    </>
  );
};

export default Home;
