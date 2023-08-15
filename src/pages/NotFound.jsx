import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import NotFound from "../components/NotFound";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NotFound />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
