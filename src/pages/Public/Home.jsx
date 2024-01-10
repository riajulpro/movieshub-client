import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MoviesHub - All the Animation movies are here</title>
      </Helmet>
      <div className="template w-full lg:w-10/12 lg:mx-auto m-3 lg:m-0 lg:mt-3 grid grid-cols-12 gap-3">
        <div className="col-span-9">Main</div>
        <div className="col-span-3">Right</div>
      </div>
    </>
  );
};

export default Home;
