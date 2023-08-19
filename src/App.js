import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import data from "./components/data";
import Accordion from "./components/Accordion";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import "./App.css";

function App() {
  const images = [
    "GigaChad1.webp",
    "GigaChad2.jpg",
    "GigaChad1.webp",
    // Add more image public/images
  ];

  const [filterText, setFilterText] = useState("");
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(filterText.trim().toLowerCase())
  );

  return (
    <>
      {/* 1.	Search filter үүсгэх. */}
      Search:
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <ProductList products={filteredProducts} />
      <br />
      {/* 2.  React deer accordion үүсгэх. */}
      <Accordion />
      <br />
      {/* 3.Image slider үүсгэх. */}
      <div className="slider-container">
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
          {images.map((image, index) => (
            <div className="size" key={index}>
              <img src={`images/${image}`} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* 4. Энэ нэвтрэх хэсгийг дуурайлгаж хийх.5. Товч дээр дарах үед modal цонх гарж ирдэг болгох.  */}
      <ModalLogin />
    </>
  );
}

export default App;
