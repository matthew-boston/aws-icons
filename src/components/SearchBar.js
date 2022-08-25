import React from "react";

const SearchBar = ({ searchValue, setSearchValue, setImages, imagesBackup }) => {
  const search = (e) => {
    e.preventDefault();

    const val = e.target.value;

    if (val.length !== 0) {
      const filteredImages = Object.values(imagesBackup).filter((obj) => obj[0].replaceAll("-", "").replace(".svg", "").toLowerCase().includes(val.replaceAll(" ", "").toLowerCase()));

      setImages(filteredImages);
    } else {
      setImages(imagesBackup);
    }

    setSearchValue(val);
  };
  return (
    <form className="search-bar" onSubmit={(e) => search(e)}>
      <button type="submit">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 12.0013C23.5 18.3518 18.3516 23.4999 12.0006 23.4999C5.64962 23.4999 0.50119 18.3518 0.50119 12.0013C0.50119 5.65087 5.64962 0.502747 12.0006 0.502747C18.3516 0.502747 23.5 5.65087 23.5 12.0013Z" stroke="black" />
          <path
            d="M14.1476 13.2907H13.6959L13.5358 13.1363C14.0961 12.4845 14.4334 11.6383 14.4334 10.7178C14.4334 8.66515 12.7696 7.00134 10.717 7.00134C8.66442 7.00134 7.00061 8.66515 7.00061 10.7178C7.00061 12.7704 8.66442 14.4342 10.717 14.4342C11.6375 14.4342 12.4837 14.0968 13.1355 13.5365L13.2899 13.6966V14.1483L16.1487 17.0013L17.0006 16.1494L14.1476 13.2907V13.2907ZM10.717 13.2907C9.29335 13.2907 8.14412 12.1414 8.14412 10.7178C8.14412 9.29408 9.29335 8.14485 10.717 8.14485C12.1407 8.14485 13.2899 9.29408 13.2899 10.7178C13.2899 12.1414 12.1407 13.2907 10.717 13.2907Z"
            fill="black"
          />
        </svg>
      </button>
      <input type="text" placeholder="Search for an icon..." value={searchValue} onChange={(e) => search(e)} />
    </form>
  );
};

export default SearchBar;
