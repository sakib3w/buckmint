import React, { useEffect } from "react";
import Header from "../components/Header";
import Particle from "../components/Particle";
// import Counter from "../containers/Counter";
import Homes from "../containers/Home";
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,1)
  },[])
  return (
    <>
      <Particle />
      <Header hidePackageRoute />
      <Homes/>
      {/* <Counter/> */}
    </>
  );
};

export default Home;
