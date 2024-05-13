import React, { useState } from "react";

const ColorPicker = () => {
  const colors = ["red", "blue", "green", "yellow", "orange"];

  const [selectColor, selectColorSet] = useState(null);

  const handleColorClick = (color) => {
    selectColorSet(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <h2>Select a color</h2>
      <div style={{ display: "flex", paddingBottom: "15px" }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorClick(color)}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              margin: "5px",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
