import React, { useState } from 'react';

const RightColumn = () => {
  const [borderRadius, setBorderRadius] = useState(0);

  const handleBorderRadiusChange = (e) => {
    setBorderRadius(e.target.value);
  }

  return (
    <div>
      <h2>Columna Derecha</h2>
      <label htmlFor="borderRadiusInput">Border Radius:</label>
      <input
        type="range"
        id="borderRadiusInput"
        min="0"
        max="50"
        value={borderRadius}
        onChange={handleBorderRadiusChange}
      />
      <p>Valor actual: {borderRadius}</p>
    </div>
  );
}

export default RightColumn;
