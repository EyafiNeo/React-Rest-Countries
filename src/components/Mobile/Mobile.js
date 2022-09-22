import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    const [battery, setBattery] = useState(100);
    const batteryUpdate = () => {
        if (battery > 0) {
            return setBattery(battery - 1);
        }
    }
    return (
        <div>
            <h2>Mobile Battery: {battery}% </h2>
            <button className='battery-down-button' onClick={batteryUpdate}>Battery Down</button>
        </div>
    );
};

export default Mobile;