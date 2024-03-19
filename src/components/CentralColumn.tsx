import React from 'react'
import { styled } from 'styled-components'

const CentralColumn = ({ cssStyle }: { cssStyle: string }) => {
  const css = `.container{ 
    ${cssStyle} 
  }`

  return (
    <div className="container">
      <style>{css}</style>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>

      <button className="btn btn-primary">Est laborum</button>
    </div>
  )
}

export default CentralColumn
