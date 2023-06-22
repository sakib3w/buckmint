import React, { useEffect } from "react";
import Header from "../components/Header";
import Particle from "../components/Particle";
import Plan from "../containers/Plan";
const Packages = () => {
  useEffect(()=>{
    window.scrollTo(0,1)
  },[])
  return (
    <>
      <Particle />
      <Header hidePackageRoute />
      <Plan/>  
    </>
  );
};

export default Packages;
