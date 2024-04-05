import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import searchImages from './API'
import ImageList from "./Components/ImageList";

function App() {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };


  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </>
  );
}

export default App;
