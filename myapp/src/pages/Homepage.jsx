import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import axios from "axios";
import Card from "../Card";

const Homepage = () => {
  const [poducts, setProducts] = useState([]);

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data))
    .catch((er) => console.log(err)); //.catch(er=>console.log("something wrong"))
  return (
    <div>
      <Header />
      <Slider />
    
      <Card />
      <Footer />
    </div>
  );
};

export default Homepage;
