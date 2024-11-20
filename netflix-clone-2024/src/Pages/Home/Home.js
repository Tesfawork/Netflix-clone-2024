import React from "react";
import Header from "../../component/Header/Header";
import Banner from "../../component/Banner/Banner";
import RowList from "../../component/Rows/RowList/RowList";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <Banner />
      <RowList />

      <Footer />
    </div>
  );
};

export default Home;
