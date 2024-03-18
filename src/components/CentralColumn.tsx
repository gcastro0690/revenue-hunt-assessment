import React from 'react'

const CentralColumn = ({ borderRadius }) => {
  const buttonStyle = {
    borderRadius: `${borderRadius}px`,
  }

  return (
    <div>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>
      <button className="btn btn-primary" style={buttonStyle}>
        Est laborum
      </button>
    </div>
  )
}

export default CentralColumn
