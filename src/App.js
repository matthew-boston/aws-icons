import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Icons from "./components/Icons";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
  return images;
};

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [imagesBackup, setImagesBackup] = useState(images);

  useEffect(() => {
    let images = importAll(require.context("./assets"));
    images = Object.entries(images).map((obj) => obj);
    setImages(images);
    setImagesBackup(images);
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <SearchBar {...{ searchValue, setSearchValue, setImages, images, imagesBackup }} />
        <Icons images={images} />
      </main>
    </div>
  );
};

export default App;
