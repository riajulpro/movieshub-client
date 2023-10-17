import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const Home = () => {
  const { name } = useContext(AuthProvider);
  return (
    <div>
      <h1>Hello there! {name}</h1>
    </div>
  );
};

export default Home;
