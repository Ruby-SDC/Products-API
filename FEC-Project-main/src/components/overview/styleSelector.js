import React from "react";
import { useProduct } from "../../contexts/ProductContext.js";

export default function StyleSelector() {
  const { styles, styleReducer } = useProduct();
  const [styleValue, setStyleValue] = styleReducer;
  console.log(styles)
  function setStyleOnClick(e) {
    setStyleValue({
      styleId: parseInt(e.target.id),
    });
  }
  return (
    <div className="style-component">
      <span>{styleValue.currentStyle ? `Styles - ${styleValue.currentStyle.name}` : `Styles`}</span>
      <div className="style-container">
        {styles.map(style => {
          return (
            <img
              key={style.style_id}
              id={style.style_id}
              onClick={setStyleOnClick}
              className={styleValue.styleId === style.style_id ? 'style-thumbnails selected-style' : 'style-thumbnails'}
              src={style.photos[0].thumbnail_url}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
