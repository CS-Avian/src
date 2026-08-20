import React, { useState } from 'react'

export default function ColorPicker() {

    const [color, setColor] = useState('#FFF000')


    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-box" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Set a color : </label>
            <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
    )
}