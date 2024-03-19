import { TextField } from '@shopify/polaris'
import React from 'react'

const RightColumn = ({
  setCssStyle,
  cssStyle,
}: {
  setCssStyle: (value: string) => void
  cssStyle: string
}) => {
  return (
    <div>
      <h2>Columna Derecha</h2>
      <label htmlFor="borderRadiusInput">Border Radius:</label>
      <TextField
        autoComplete="off"
        label="CSS Editor"
        value={cssStyle}
        onChange={setCssStyle}
        multiline={10}
      />
      <p>Valor actual: {cssStyle}</p>
    </div>
  )
}

export default RightColumn
