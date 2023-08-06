import React from 'react'

export default function ColorPicker({handleChange,colorValue}) {
  return (
    <div className='color-picker-card'>
        <div className="color-picker">
        <input
          type="text"
          className="color-text "
          onChange={handleChange}
          value={colorValue}
        />
        <div className="cl" style={{ backgroundColor: colorValue }}>
          <input
            type="color"
            name="color-input"
            className="color-input"
            onChange={handleChange}
            onInput={handleChange}
          />
        </div>
      </div>
      <div className="picked" style={{ backgroundColor: colorValue }}>
        {colorValue}
      </div>
    </div>
  )
}
